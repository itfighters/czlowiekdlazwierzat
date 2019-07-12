const BASE_URL = "https://localhost:44335/api/category";

export function GetCategories() {
  return fetch(BASE_URL).then(response => response.json());
}
