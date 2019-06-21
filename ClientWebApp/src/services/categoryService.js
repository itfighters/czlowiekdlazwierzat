var allCategories = [];

export function GetAllCategories() {
  if (allCategories.length === 0) {
    return fetch(
      "https://czlowiekdlazwierzat.azurewebsites.net/server/api/category/"
    )
      .then(response => response.json())
      .then(categories => {
        allCategories = categories;
        return Promise.resolve(allCategories);
      });
  } else {
    return Promise.resolve(allCategories);
  }
}
