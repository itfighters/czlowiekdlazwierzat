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
  }).then(handleResponse);
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
  }).then(handleResponse);
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
  }).then(handleResponse);
}

function handleResponse(response) {
  if (response.status !== 200) {
    return response.json().then(msg => {
      return Promise.reject(msg);
    });
  }
  return Promise.resolve(response);
}
