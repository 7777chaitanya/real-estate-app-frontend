import backendUrl from '../config/default';
import objectToQueryString from '../utils/objectToQueryString';

export default async function (queryObject) {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
}
