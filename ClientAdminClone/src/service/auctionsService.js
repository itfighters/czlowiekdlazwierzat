import { authTokenKey } from "../Utils/auth";
import { mapInputsForPost } from "../Utils/helpers";
const BASE_URL = "https://localhost:44335/api/auction";

export function getAuctions(page, pageSize) {
  var url = new URL("https://localhost:44335/api/auction/all");
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
  var url = new URL("https://localhost:44335/api/auction");
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
  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
    },
    body: JSON.stringify(mapInputsForPost(form))
  });
}

export function editAuction(form) {
  var url = new URL(BASE_URL);
  return fetch(url, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
    },
    body: JSON.stringify(mapInputsForPost(form))
  });
}

export function getDetails(id) {
  var url = new URL(BASE_URL);
  return fetch(url + "/details?Id=" + id).then(response => response.json());
}
