import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {
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
    
    @Column({
        type: 'varchar',
        length: 20,
    })
    role : string

    @Column({default: true })
    status: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}