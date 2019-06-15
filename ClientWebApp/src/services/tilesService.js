export function fetchTiles(){
  return fetch('http://czlowiekdlazwierzat.azurewebsites.net/server/api/auction/')
  .then(response => response.json())
}