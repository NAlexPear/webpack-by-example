import Router from 'navigo';
import { getPhotos } from './src/helpers';

const router = new Router();
const container = document.createElement('div');

router
  .on({
    "/admin": () => import(/* webpackChunkName: "admin" */ './src/admin')
      .then(admin => {
        container.innerHTML = "";

        container.appendChild(admin.default);
      }
    ),
    "/": () => import(/* webpackChunkName: "app" */ './src/app')
      .then(App => {
        const app = new App.default(container);

        container.innerHTML = "";

        getPhotos(app.start.bind(app));
      }
    ),
  })
  .resolve();

document.body.appendChild(container);
