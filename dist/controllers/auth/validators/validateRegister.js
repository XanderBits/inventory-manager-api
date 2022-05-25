"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const express_validator_1 = require("express-validator");
const validateResult_1 = require("../../../middlewares/validateResult");
exports.validateRegister = [
    (0, express_validator_1.check)('name')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    (0, express_validator_1.check)('lastname')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    (0, express_validator_1.check)('email')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY')
        .isEmail()
        .withMessage('EMAIL_IS_NOT_VALID'),
    (0, express_validator_1.check)('password')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY')
        .isLength({
        min: 8
    })
        .withMessage('PASSWORD_TOO_SHORT_MIN_8'),
    (0, express_validator_1.check)('role')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    (req, res, next) => {
        (0, validateResult_1.validateResult)(req, res, next);
    }
];
