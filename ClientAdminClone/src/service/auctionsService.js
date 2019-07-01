import { authTokenKey } from '../Utils/auth';

export function getAuctions()
{
    return fetch('https://localhost:44335/api/auction/all', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(authTokenKey)}`
        }
    })
}