import { post } from '../Utils/fetch'

export default {
    sendLogUser(user, password) {
        return post('https://czlowiekdlazwierzat.azurewebsites.net/server/api/user', {user, password})
    }
}