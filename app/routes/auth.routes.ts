import { Router } from "express"
import  {register} from '../controllers/auth/register'
import  { login } from '../controllers/auth/login'
import { validateRegister } from '../controllers/auth/validators/validateRegister'
import { validateLogin } from "../controllers/auth/validators/validateLogin"
const router = Router()

router.post('/auth/register', validateRegister, register)
router.post('/auth/login', validateLogin, login)

export default router