import jwt from 'jsonwebtoken';
export const authTokenKey = 'AUTH_KEY';

export function isAuthenticated() {
    let token = localStorage.getItem(authTokenKey);
    if (!token)
        return false;

    let decodedToken = jwt.decode(token);
    if (decodedToken) {
        const expiry = decodedToken.exp;
        const now = new Date();
        return now.getTime() < expiry * 1000;
    }

    return false;
}