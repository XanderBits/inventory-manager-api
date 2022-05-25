"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const role_1 = require("./entity/role");
const product_1 = require("./entity/product");
const _1653460148102_CreateinitRole_1 = require("./migrations/1653460148102-CreateinitRole");
const _1653460170008_CreateUserRoot_1 = require("./migrations/1653460170008-CreateUserRoot");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "alex1924",
    database: "demoDB",
    synchronize: true,
    logging: true,
    entities: [user_1.Users, role_1.Roles, product_1.Product],
    migrations: [_1653460148102_CreateinitRole_1.CreateinitRole1653460148102, _1653460170008_CreateUserRoot_1.CreateUserRoot1653460170008]
});
