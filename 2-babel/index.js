import App from './src/app';
import { getPhotos } from './src/helpers';

const container = document.getElementById('container');
const app = new App(container);

getPhotos(app.start.bind(app));
