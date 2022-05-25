import { Router } from "express"
import  {register} from '../controllers/auth/register'
import { validateRegister } from '../controllers/auth/validators/validateRegister'
const router = Router()

router.post('/auth/register', validateRegister, register)

export default router