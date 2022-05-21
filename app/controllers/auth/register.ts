import { Request, Response } from "express";
import registerUser from "./helpers/registerUser";
/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

export default async function register(req: Request, res: Response){
        const item = await registerUser(req)
        res.status(201).json(item)
}
