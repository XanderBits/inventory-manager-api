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
exports.register = void 0;
const registerUser_1 = require("./helpers/registerUser");
const returnToken_1 = require("./helpers/returnToken");
const emailExists_1 = require("./helpers/emailExists");
/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const doesEmailExists = yield (0, emailExists_1.emailExists)(req.body.email);
            if (!doesEmailExists) {
                const user = yield (0, registerUser_1.registerUser)(req);
                res.status(201).json(yield (0, returnToken_1.returnToken)(user));
            }
            else
                res.status(400).json(doesEmailExists);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.register = register;
