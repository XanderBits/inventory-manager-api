"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResult = void 0;
const express_validator_1 = require("express-validator");
/**
 * Builds error for validation files
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Object} next - next object
 */
function validateResult(req, res, next) {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        if (req.body.email)
            req.body.email = req.body.email.toLowerCase();
        return next();
    }
    catch (err) {
        res.status(422).send(err);
    }
}
exports.validateResult = validateResult;
