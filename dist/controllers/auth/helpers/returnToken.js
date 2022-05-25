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
exports.returnToken = void 0;
const createToken_1 = require("./createToken");
const setUserInfo_1 = require("./setUserInfo");
function returnToken(user) {
    return __awaiter(this, void 0, void 0, function* () {
        user = JSON.parse(JSON.stringify(user));
        const userInfo = yield (0, setUserInfo_1.setUserInfo)(user);
        return {
            token: (0, createToken_1.createToken)(user.id),
            user: userInfo,
        };
    });
}
exports.returnToken = returnToken;
