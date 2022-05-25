export function setUserInfo(user: any): Promise<object> {
    return new Promise((resolve) => {
        let userInfo = {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            role: user.role,
        };
        resolve(userInfo);
    });
}
