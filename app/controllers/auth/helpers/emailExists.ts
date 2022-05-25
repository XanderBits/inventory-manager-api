import { AppDataSource } from "../../../ormconfig";
import { Users } from "../../../entity/user";

export async function emailExists(email: string) {
    const getEmail = await AppDataSource.getRepository(Users).find({
        where: { email: email },
    });

    if(getEmail) 
        return "EMAIL_ALREADY_EXISTS";
    return false;
}
