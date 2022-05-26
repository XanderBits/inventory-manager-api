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
exports.emailExists = void 0;
const ormconfig_1 = require("../../../ormconfig");
const user_1 = require("../../../entity/user");
function emailExists(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const getEmail = yield ormconfig_1.AppDataSource.getRepository(user_1.Users)
            .createQueryBuilder("user")
            .where("user.email = :email", { email: email })
            .getOne();
        if (getEmail != null)
            return "EMAIL_ALREADY_EXISTS";
        else
            return false;
    });
}
exports.emailExists = emailExists;
