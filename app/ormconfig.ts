import { DataSource } from "typeorm";
import { Users } from "./entity/user";
import { Roles } from "./entity/role";
import { Product } from "./entity/product";
import { CreateinitRole1653460148102 } from './migrations/1653460148102-CreateinitRole'
import { CreateUserRoot1653460170008 } from './migrations/1653460170008-CreateUserRoot'


export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "alex1924",
	database: "demoDB",
	synchronize: true,
	logging: true,
	entities: [Users, Roles, Product],
	migrations: [CreateinitRole1653460148102, CreateUserRoot1653460170008]
});