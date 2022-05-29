import { NextFunction, Request, Response } from "express"
import { check } from "express-validator"
import { validateResult } from '../../../middlewares/validateResult'

/**
 * Validates register request
 */
export const validateRegister = [
    check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
    check('lastname')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
    check('email')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isEmail()
    .withMessage('EMAIL_IS_NOT_VALID'),
    check('password')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isLength({
        min: 8
    })
    .withMessage('PASSWORD_TOO_SHORT_MIN_8'),
    check('role')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
    (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
    }
]
