import { flow, get, map, take } from 'lodash/fp';
import request from 'superagent';

const bar = { name: 'test' };

export function getPhotos(callback, errorHandler = console.log) {
  var parseAndCall = flow(
    get('body'),
    take(5),
    map('url'),
    callback
  );

  request
    .get('http://jsonplaceholder.typicode.com/photos')
    .then(parseAndCall)
    .catch(errorHandler);
}
