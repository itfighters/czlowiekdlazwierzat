const URL = ""; //add when it will be ready

export function sendEmailAdressToServer(emailAdress, categories) {
  return fetch(URL, {
    method: "post",
    body: JSON.stringify({
      mail: emailAdress,
      categories: categories
    })
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response);
  });
}

export function sendPhoneNumberToServer(phoneNumber, categories) {
  return fetch(URL, {
    method: "post",
    body: JSON.stringify({
      number: phoneNumber,
      categories: categories
    })
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response);
  });
}

export function confirmPhoneNumber(code) {
  return fetch(URL, {
    method: "post",
    body: JSON.stringify({
      code: code
    })
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response);
  });
}

export function sendTokenToServer(token, categories) {
  return fetch(URL, {
    method: "post",
    body: JSON.stringify({
      token: token,
      categories: categories
    })
  }).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return Promise.resolve(response);
  });
}
