import jwt from 'jsonwebtoken'
/**
 * Register function called by route
 * @param {Number} user - User id number
 */ 
export function createToken(user: number){
    try{
        const expiration = Math.floor(Date.now() / 1000) + parseInt(process.env.JWT_EXPIRATION_SECONDS!)
        return jwt.sign({ data: {id: user}, exp: expiration}, process.env.JWT_SECRET!)
    }catch(error){
        throw error
    }
}