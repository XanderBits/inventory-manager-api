export async function checkPassword(passwordAttempt: string,  user: any){
    user?.checkPassword(passwordAttempt, (err: Error, isMatch: boolean) => {
        if(err)
            return  {Error: err.message} 
        if(!isMatch)
            return false
        return isMatch
    });
}