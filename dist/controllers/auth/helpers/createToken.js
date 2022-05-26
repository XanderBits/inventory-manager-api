"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * Register function called by route
 * @param {Number} user - User id number
 */
function createToken(user) {
    try {
        const expiration = Math.floor(Date.now() / 1000) + parseInt(process.env.JWT_EXPIRATION_SECONDS);
        return jsonwebtoken_1.default.sign({ data: { id: user }, exp: expiration }, process.env.JWT_SECRET);
    }
    catch (error) {
        throw error;
    }
}
exports.createToken = createToken;
