"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserInfo = void 0;
function setUserInfo(user) {
    return new Promise((resolve) => {
        let userInfo = {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            role: user.role,
        };
        resolve(userInfo);
    });
}
exports.setUserInfo = setUserInfo;
