import { API_URL } from "../config";

const URL = API_URL + "subscription";

export const subscriptionType = { Sms: 1, Email: 2, Push: 3 };

export function subscribe(value, type, categories) {
  return fetch(`${URL}/subscribe`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      value: value,
      subscriptionType: type,
      categories: categories
    })
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response);
  });
}

export function confirmPhoneNumber(code, tel) {
  return fetch(`${URL}/confirm`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: code,
      contact: tel
    })
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response);
  });
}

export function unsubscribe(tel) {
  return fetch(`${URL}/unsubscribe`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contact: tel
    })
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response);
  });
}
