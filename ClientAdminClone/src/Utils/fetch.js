import { list, postExample } from './mock';

export const delay = (t, v) =>
  new Promise(resolve => setTimeout(resolve.bind(null, v), t));

export const get = path => {
  let data = '';

  switch (path) {
    case '/api/list':
      data = list;
      break;
  }

  if(path.startsWith('/api/post'))
   data = postExample;

  return delay(1000).then(() => data);
};
