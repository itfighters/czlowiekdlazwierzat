import { list } from './mock';

export const delay = (t, v) =>
  new Promise(resolve => setTimeout(resolve.bind(null, v), t));

export const get = path => {
  let data = '';

  switch (path) {
    case 'https://czlowiekdlazwierzat.azurewebsites.net/server/api/user':
      data = list;
      break;
  }

  return delay(1000).then(() => data);
};

const postImpl = (path, object) => fetch(path, 
  {method: 'post', body: JSON.stringify(object)})

export const post = (path, data) => {
  let returnData = '';

  // switch (path) {
  //   case '/api/login': {
  //     if (data === '1234')
  //       returnData = { success: true, token: "tjsfdfasfsadfasdasdf" }
  //     else
  //       returnData = { success: false };
  //   }
  // }

  if(path === 'https://czlowiekdlazwierzat.azurewebsites.net/server/api/user')
    return postImpl(path, data);

  console.group("post-mock");
  console.log(path);
  console.log(data);
  console.log(returnData);
  console.groupEnd();

  return delay(1000).then(() => returnData);
}