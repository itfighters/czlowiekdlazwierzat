import { post } from '../Utils/fetch'

export default {
    sendLogUser(login, password) {
        return post('https://czlowiekdlazwierzat.azurewebsite.net/server/api/user', {login, password})
    }
}