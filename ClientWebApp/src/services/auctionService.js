import { API_URL } from "../config";
import { mockPromisse, auctions } from "./mockData";

const URL = API_URL + "auction";

export function GetDetails(id) {
  return mockPromisse(auctions.find(x => x.id == id));
  // return fetch(URL + "/details?Id=" + id).then(response => response.json());
}

export function fetchTiles() {
  return mockPromisse(auctions);
  // return fetch(URL).then(response => response.json());
}

export function fetchFeaturedTiles() {
  return mockPromisse(auctions);
  // return fetch(`${URL}/featured?count=6`).then(response => response.json());
}
