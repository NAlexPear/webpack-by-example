import photo from './components/photo';
import timer from './components/timer';
import createMarquee from './components/marquee';


export default class App {
  constructor(container){
    this.container = container;
  }

  appendPhoto({ url, title }){
    var img = photo(url, title);

    this.container.appendChild(img);
  }

  start(photos){
    this.container.appendChild(createMarquee());
    this.container.appendChild(timer.start());

    photos.forEach(photo => this.appendPhoto(photo));
  }
};
