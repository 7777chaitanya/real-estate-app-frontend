import backendUrl from '../config/default';
import objectToQueryString from '../utils/objectToQueryString';

export default async function (queryObject) {
  console.log('queryObject', queryObject);
  try {
    const response = await fetch(
      `${backendUrl}/signin?${objectToQueryString(queryObject)}`,
    );
    const json = await response.json();
    console.log('return value of signin', json);
    return json;
  } catch (error) {
    console.error(error);
  }
}
