import { API_URL } from "../config";

const URL = API_URL + "category";

var allCategories = [];

export function GetAllCategories() {
  if (allCategories.length === 0) {
    return fetch(URL)
      .then(response => response.json())
      .then(categories => {
        allCategories = categories;
        return Promise.resolve(allCategories);
      });
  } else {
    return Promise.resolve(allCategories);
  }
}
