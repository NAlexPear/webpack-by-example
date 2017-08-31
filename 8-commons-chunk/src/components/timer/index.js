import './timer.css';

var container = document.createElement('div');

container.classList.add('timer');

export default {
  start(){
    var seconds = 0;

    setInterval(() => {
      container.textContent = seconds++;
    }, 1000);

    return container;
  }
}
