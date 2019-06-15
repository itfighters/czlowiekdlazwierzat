const authTokenKey = 'AUTH_KEY';

export function isAuthenticated()
{
    return localStorage.getItem(authTokenKey);
}