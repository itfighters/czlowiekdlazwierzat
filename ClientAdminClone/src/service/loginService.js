import { API_URL } from "../config";
const BASE_URL = API_URL + "user/validate";

export default {
  sendLogUser(login, password) {
    return fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ login, password })
    });
  }
};
