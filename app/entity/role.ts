import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Users } from './user'

@Entity()
export class Roles{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Users, (user) => Users.role)
    users: Users[]
}