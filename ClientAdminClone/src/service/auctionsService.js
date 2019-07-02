import { authTokenKey } from '../Utils/auth';

export function getAuctions(page,pageSize) {
    var url = new URL("https://localhost:44335/api/auction");
    var params = {page,pageSize};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
    return fetch(url, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(authTokenKey)}`
        }
    })
}

export function deleteAuction(id)
{
    var url = new URL("https://localhost:44335/api/auction");
    url.searchParams.append('id',id);
    return fetch(url, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(authTokenKey)}`
        }
    })
}