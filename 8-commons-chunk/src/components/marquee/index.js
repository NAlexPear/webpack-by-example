export default function createMarquee(override){
  var title = "Some text"; // change me for hot reloading!
  var h1 = document.createElement('h1');

  h1.textContent = override || title;

  return h1;
}
