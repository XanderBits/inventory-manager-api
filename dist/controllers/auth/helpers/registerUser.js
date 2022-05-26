"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_1 = require("../../../entity/user");
const ormconfig_1 = require("../../../ormconfig");
const role_1 = require("../../../entity/role");
function registerUser(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, lastname, email, password, role } = req.body;
            const userRole = yield ormconfig_1.AppDataSource.getRepository(role_1.Roles)
                .createQueryBuilder("roles")
                .where("roles.id = :id", { id: role })
                .getOne();
            const user = new user_1.Users();
            user.name = name;
            user.lastname = lastname;
            user.email = email;
            user.password = password;
            user.role = userRole;
            yield ormconfig_1.AppDataSource.getRepository(user_1.Users).save(user);
            return user;
        }
        catch (error) {
            return {
                Error: error,
            };
        }
    });
}
exports.registerUser = registerUser;
