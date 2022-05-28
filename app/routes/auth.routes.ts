import { Request, Response, Router } from "express"
import  {register} from '../controllers/auth/register'
import { validateRegister } from '../controllers/auth/validators/validateRegister'
const router = Router()

router.post('/auth/register', validateRegister, register)
router.post('/auth/login',(req: Request, res: Response) => {
    res.status(200).send("///// OK /////")
})

export default router