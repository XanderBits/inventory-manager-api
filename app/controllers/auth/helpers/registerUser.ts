import { Users } from "../../../entity/user";
import { AppDataSource } from "../../../ormconfig";
import { Request } from "express";
import { Roles } from "../../../entity/role";

export async function registerUser(req: Request): Promise<Object> {
  try {
    const { name, lastname, email, password, role } = req.body;
    const userRole = await AppDataSource.getRepository(Roles)
      .createQueryBuilder("roles")
      .where("roles.id = :id", { id: role })
      .getOne();

      const user = new Users();
      user.name = name;
      user.lastname = lastname;
      user.email = email;
      user.password = password;
      user.role = userRole!;
      
    await AppDataSource.getRepository(Users).save(user);
    return user;
  } catch (error) {
    return {
      Error: error,
    };
  }
}
