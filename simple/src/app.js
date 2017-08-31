function App(config){
  this.label = config.label;
};

function photoAppender(url){
  var img = document.createElement('img');

  img.src = url;
  img.alt = this.label;

  this.container.appendChild(img);
}

App.prototype.start = function start(container, photos){
  this.container = container;

  photos.forEach(photoAppender);
}


module.exports = App;
