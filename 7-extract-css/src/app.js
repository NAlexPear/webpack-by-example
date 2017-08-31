import photo from './components/photo';
import timer from './components/timer';

export default class App {
  constructor(container){
    this.container = container;
  }

  appendPhoto({ url, title }){
    var img = photo(url, title);

    this.container.appendChild(img);
  }

  appendTimer(){
    var clock = timer.start();

    this.container.appendChild(clock);
  }

  start(photos){
    this.appendTimer();

    photos.forEach(photo => this.appendPhoto(photo));
  }
};
