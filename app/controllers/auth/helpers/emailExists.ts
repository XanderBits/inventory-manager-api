import { AppDataSource } from "../../../ormconfig";
import { Users } from "../../../entity/user";

export async function emailExists(email: string) {
    const getEmail = await AppDataSource.getRepository(Users)
    .createQueryBuilder("user")
    .where("user.email = :email", { email: email })
    .getOne()
    if(getEmail) 
        return "EMAIL_ALREADY_EXISTS";
    else
        return false
}
