import { template } from 'lodash/fp';
import photo from './photo.html';
import './photo.css';

export default function renderPhoto(url, title){
  var img = document.createElement('div')

  img.innerHTML = template(photo)({ url, title });

  return img;
}
