import { DataSource } from "typeorm";
import { Users } from "./entity/user";
import { Roles } from "./entity/role";
import { Product } from "./entity/product";
import { CreateinitRole1653460148102 } from './migrations/1653460148102-CreateinitRole'
import { CreateUserRoot1653460170008 } from './migrations/1653460170008-CreateUserRoot'
import "dotenv/config";


export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.TYPEORM_HOST,
	port: 5432,
	username: process.env.TYPEORM_USERNAME,
	password: process.env.TYPEORM_PASSWORD,
	database: process.env.TYPEORM_DATABASE,
	synchronize: true,
	logging: true,
	entities: [Users, Roles, Product],
	migrations: [CreateinitRole1653460148102, CreateUserRoot1653460170008]
});