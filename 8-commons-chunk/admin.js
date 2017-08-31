import createMarquee from './src/components/marquee';

const container = document.createElement('div');
const marquee = createMarquee('This is an Admin Page');

container.appendChild(marquee);
document.body.appendChild(container);
