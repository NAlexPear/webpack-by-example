export default class App {
  constructor(container){
    this.container = container;
  }

  appendPhoto(url){
    var img = document.createElement('img');

    img.src = url;
    img.alt = this.label;

    this.container.appendChild(img);
  }

  start(photos){
    photos.forEach(url => this.appendPhoto(url));
  }
};
