import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id : number

    @Column({type: 'text'})
    name : string

    @Column({type: 'varchar', length: 40})
    category : string

    @Column({type: 'varchar', length: 40})
    unit: string

    @Column()
    minStock: number

    @Column()
    current: number
}