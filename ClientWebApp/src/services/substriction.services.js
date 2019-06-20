const URL = ""; //add when it will be ready

export function sendEmailAdressToServer(emailAdress) {
  return fetch(URL, {
    method: "post",
    body: JSON.stringify({
      mail: emailAdress // change mail when backend will be ready
    })
  });
}

export function sendPhoneNumberToServer(phoneNumber) {
  return fetch(URL, {
    method: "post",
    body: JSON.stringify({
      number: phoneNumber // change numer when backend will be ready
    })
  });
}
