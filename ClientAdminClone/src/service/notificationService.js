import { post } from '../Utils/fetch';
import { authTokenKey } from '../Utils/auth';

export default {
  requestEmail(auctionId) {
    return post(
      'https://czlowiekdlazwierzat.azurewebsites.net/server/api/notification',
      { auctionId, type: 2 }
    );
  },
  requestSms(auctionId) {
    return post(
      'https://czlowiekdlazwierzat.azurewebsites.net/server/api/notification',
      { auctionId, type: 1 }
    );
  },
  toBeSent(auctionId) {
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
