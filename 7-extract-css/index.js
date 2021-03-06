import App from './src/app';
import { getPhotos } from './src/helpers';
import createMarquee from './src/components/marquee';

const container = document.createElement('div');
const app = new App(container);

container.appendChild(createMarquee());

document.body.appendChild(container);

getPhotos(app.start.bind(app));
