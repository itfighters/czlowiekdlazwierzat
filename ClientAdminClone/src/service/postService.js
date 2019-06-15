import { get } from '../Utils/fetch'

export default {
    getForm(id){
        return  get(`/api/post/${id}`)
    }
}