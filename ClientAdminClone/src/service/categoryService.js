import { authTokenKey } from "../Utils/auth";
import { API_URL } from "../config";
const BASE_URL = API_URL + "category";

export function GetCategories() {
  return fetch(`${BASE_URL}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response.json());
  });
}

export function GetCategory(id) {
  return fetch(`${BASE_URL}/details?id=${id}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response.json());
  });
}

export function RemoveCategory(id) {
  return fetch(`${BASE_URL}?id=${id}`, {
    method: "delete"
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response);
  });
}

export function AddCategory(category) {
  var url = new URL(BASE_URL);
  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
    },
    body: JSON.stringify(category)
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response);
  });
}

export function EditCategory(category) {
  var url = new URL(BASE_URL);
  return fetch(url, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
    },
    body: JSON.stringify(category)
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response);
  });
}
