import { template } from 'lodash/fp';
import photo from './templates/photo.html';


export default function renderPhoto(url, title){
  var img = document.createElement('div')

  img.innerHTML = template(photo)({ url, title });

  return img;
}
