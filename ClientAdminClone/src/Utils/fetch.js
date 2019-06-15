import { list, postExample } from './mock';

export const delay = (t, v) =>
  new Promise(resolve => setTimeout(resolve.bind(null, v), t));

export const get = path => {
  let data = '';
<<<<<<< HEAD
  switch (path) {
    case 'https://czlowiekdlazwierzat.azurewebsites.net/server/api/user':
      data = list;
      break;
    default: 
    break;
  }
=======

  // if (path.startsWith('/api/post')) data = postExample;
>>>>>>> bc19822f13990299c5a944214aab40d6691eebf3

  return fetch(path, { method: 'GET' }).then(data => data.json());

  // return delay(1000).then(() => data);
};

<<<<<<< HEAD
const postImpl = (path, object) => fetch(path, 
  {method: 'post', body: JSON.stringify(object),headers:{
    'Content-Type': 'application/json'
  }})

export const post = (path, data) => {
  let returnData = '';
  if(path === 'https://czlowiekdlazwierzat.azurewebsites.net/server/api/user')
    return postImpl(path, data);

  // console.group("post-mock");
  // console.log(path);
  // console.log(data);
  // console.log(returnData);
  // console.groupEnd();
=======
export const put = (path, data) =>
  fetch(path, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

const postImpl = (path, object) =>
  fetch(path, {
    method: 'post',
    body: JSON.stringify(object),
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

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

  console.group('post-mock');
  console.log(path);
  console.log(data);
  console.log(returnData);
  console.log(JSON.stringify(data));
  console.groupEnd();
>>>>>>> bc19822f13990299c5a944214aab40d6691eebf3

  if (returnData === '') return postImpl(path, data);

  return delay(1000).then(() => returnData);
};
