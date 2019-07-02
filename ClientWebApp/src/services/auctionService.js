import { API_URL } from "../config";

const URL = API_URL + "auction";

export function GetDetails(id) {
  return fetch(URL + "/" + id).then(response => response.json());
}

export function fetchTiles() {
  return fetch(URL).then(response => response.json());
}
