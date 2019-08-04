import { authTokenKey } from "../Utils/auth";
import { API_URL } from "../config";
const BASE_URL = API_URL + "notification";

export default {
  sendNotification(auctionId, type) {
    var url = new URL(BASE_URL);
    return fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
      },
      body: JSON.stringify({ auctionId, type })
    });
  },
  notificationsDetails(auctionId) {
    var url = new URL(BASE_URL);
    var params = { auctionId };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );

    return fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
      }
    });
  }
};
