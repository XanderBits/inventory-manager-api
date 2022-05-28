import { Request, Response, Router } from "express"
import  {register} from '../controllers/auth/register'
import  { login } from '../controllers/auth/login'
import { validateRegister } from '../controllers/auth/validators/validateRegister'
const router = Router()

router.post('/auth/register', validateRegister, register)
router.post('/auth/login', login)

export default router