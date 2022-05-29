import { Users } from '../../../entity/user'
import { AppDataSource } from "../../../ormconfig";

export async function findUser(userEmail: string){
    const user = await AppDataSource.getRepository(Users)
                        .createQueryBuilder("user")
                        .where("user.email = :email", { email: userEmail })
                        .getOne();
    if(user === null) 
        return false 
    return user
}