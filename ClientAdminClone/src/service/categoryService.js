const BASE_URL = "https://localhost:44335/api/category";

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
