import { User } from '../../../entity/user'
import { AppDataSource } from '../../../db/data-source'
import { Request } from 'express'
import { Role } from '../../../entity/role'

export default async function registerUser(req: Request): Promise<Object>{
            try{ 
                const {name, lastname, email, password,role} = req.body
                const userRole = await AppDataSource
                    .getRepository(Role)
                    .createQueryBuilder("role")
                    .where("role.id = :id", { id: role })
                    .getOne()

                const user = new User()
                user.name = name
                user.lastname = lastname
                user.email = email
                user.password = password
                user.role = userRole!

                await AppDataSource.getRepository(User).save(user)
                return user
            }catch(error){
                return {
                    Error: error
                }
            }

}