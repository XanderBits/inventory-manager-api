import {Request, Response} from 'express';
import { checkPassword } from './helpers/checkPassword';
import { findUser } from './helpers/findUser';
import { returnToken } from './helpers/returnToken';

export async function login(req: Request, res: Response){
    const { email, password } = req.body
    const user = await findUser(email)
    if(!user) 
        return res.status(400).json({ Error: "LOGIN FAILED: INVALID EMAIL OR PASSWORD"})
    
    const passwordExists = checkPassword(password, user)
    if(!passwordExists)
        return res.status(400).json({ Error: "LOGIN FAILED: INVALID EMAIL OR PASSWORD"})

    res.status(200).send(await returnToken(user))
}