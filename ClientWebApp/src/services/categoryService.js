import { API_URL } from "../config";
import { mockPromisse, categories } from "./mockData";
const URL = API_URL + "category";

var allCategories = [];

export function GetAllCategories() {
  return mockPromisse(categories);

  // if (allCategories.length === 0) {
  //   return fetch(URL)
  //     .then(response => response.json())
  //     .then(categories => {
  //       allCategories = categories;
  //       return Promise.resolve(allCategories);
  //     });
  // } else {
  //   return Promise.resolve(allCategories);
  // }
}
