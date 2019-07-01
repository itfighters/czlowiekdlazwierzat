export default {
    sendLogUser(login, password)
    {
        return fetch('https://localhost:44335/api/user/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({login,password})
        });
    }
}