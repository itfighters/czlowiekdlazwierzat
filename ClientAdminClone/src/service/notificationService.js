import { post } from '../Utils/fetch';

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
};
