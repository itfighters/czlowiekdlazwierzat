import { authTokenKey } from '../Utils/auth';
export const baseUrl = () => "https://localhost:44335/api/";
export const headers = (method) => {
    return {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(authTokenKey)}`
        }
    }
}