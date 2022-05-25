import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

/**
 * Builds error for validation files
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Object} next - next object
 */
export function validateResult(req: Request, res: Response, next: NextFunction): any {
    try {
        validationResult(req).throw()
        if (req.body.email)
            req.body.email = req.body.email.toLowerCase()
        return next()
    } catch (err) {
        res.status(422).send(err)
    }
}