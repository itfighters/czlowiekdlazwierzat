export function fetchCategories(){
  return fetch('https://czlowiekdlazwierzat.azurewebsites.net/server/api/category/')
  .then(response => response.json())
}