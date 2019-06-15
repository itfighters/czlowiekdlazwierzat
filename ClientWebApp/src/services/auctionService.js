export function GetDetails(id){
    return fetch('https://czlowiekdlazwierzat.azurewebsites.net/server/api/auction/'+ id)
    .then(response => response.json())
  }