import createToken from "./createToken"
import { setUserInfo } from "./setUserInfo"

export default async function returnToken(user: any){
    user = JSON.parse(JSON.stringify(user))
    const userInfo =  await setUserInfo(user)
    return { 
        token: createToken(user.id),
        user: userInfo    
    }
}