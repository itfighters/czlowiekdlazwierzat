export function fetchTiles() {
  return fetch(
    "https://czlowiekdlazwierzat.azurewebsites.net/server/api/auction/"
  ).then(response => response.json());
}
