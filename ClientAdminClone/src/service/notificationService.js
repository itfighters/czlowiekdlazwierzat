import { authTokenKey } from '../Utils/auth';

export default {
  sendNotification(auctionId, type)
  {
    var url = new URL("https://localhost:44335/api/notification");
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(authTokenKey)}`
      },
      body: JSON.stringify({ auctionId, type })
    })
  },
  notificationsDetails(auctionId)
  {
    var url = new URL("https://localhost:44335/api/notification");
    var params = { auctionId };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(authTokenKey)}`
      }
    })
  }
};
