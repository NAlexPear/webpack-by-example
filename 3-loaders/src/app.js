import photo from './photo';

export default class App {
  constructor(container){
    this.container = container;
  }

  appendPhoto({ url, title }){
    var img = photo(url, title);

    this.container.appendChild(img);
  }

  start(photos){
    photos.forEach(photo => this.appendPhoto(photo));
  }
};
