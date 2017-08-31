import App from './src/app';
import { getPhotos } from './src/helpers';

const container = document.createElement('div');
const app = new App(container);

document.body.appendChild(container);

getPhotos(app.start.bind(app));
