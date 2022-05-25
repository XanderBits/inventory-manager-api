import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Roles } from "./role";
import  bcrypt  from 'bcrypt'

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 50,
    })
    name: string;

    @Column({
        type: "varchar",
        length: 50,
    })
    lastname: string;

    @Column({ type: "varchar"})
    email: string;

    @Column({
        type: "varchar",
        length: 100,
    })
    password : string;
    
    @ManyToOne(() => Roles, (role) => role.users)
    role : Roles

    @Column({default: true })
    status: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
    static role: any;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }

}