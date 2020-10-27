import { authTokenKey } from "../Utils/auth";
import { mapInputsForPost } from "../Utils/helpers";
import { API_URL } from "../config";
const BASE_URL = API_URL + "auction";

export function getAuctions(page, pageSize) {
  var url = new URL(BASE_URL + "/all");
  var params = { page, pageSize };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  return fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
    }
  });
}

export function deleteAuction(id) {
  var url = new URL(BASE_URL);
  url.searchParams.append("id", id);
  return fetch(url, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
    }
  });
}

export function creatAuction(form) {
  var url = new URL(BASE_URL);
  var formData = new FormData();

  for (var name in form) {
    formData.append(name, form[name]);
  }

  return fetch(url, {
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
    },
    body: formData
  });
}

export function editAuction(form) {
  var url = new URL(BASE_URL);
  var formData = new FormData();

  for (var name in form) {
    formData.append(name, form[name]);
  }

  return fetch(url, {
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
    },
    body: formData
  });
}

export function getDetails(id) {
  var url = new URL(BASE_URL);
  return fetch(url + "/details?Id=" + id).then(response => response.json());
}
