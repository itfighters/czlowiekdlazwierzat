import { list, postExample } from './mock';

export const delay = (t, v) =>
  new Promise(resolve => setTimeout(resolve.bind(null, v), t));

export const get = path => {
  let data = '';

  // if (path.startsWith('/api/post')) data = postExample;

  return fetch(path, { method: 'GET' }).then(data => data.json());

  // return delay(1000).then(() => data);
};

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

  if (returnData === '') return postImpl(path, data);

  return delay(1000).then(() => returnData);
};
