import { Request, Response } from "express";
import { registerUser } from "./helpers/registerUser";
import { returnToken } from "./helpers/returnToken";
import { emailExists } from "./helpers/emailExists";
/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

export async function register(req: Request, res: Response) {
  try {
    const doesEmailExists = await emailExists(req.body.email);
    if (!doesEmailExists) {
      const user = await registerUser(req);
      res.status(201).json(await returnToken(user));
    }else 
      res.status(400).json(doesEmailExists)
  } catch (error) {
    res.status(500).send(error);
  }
}
