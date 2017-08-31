function photoAppender(url){
  var img = document.createElement('img');

  img.src = url;
  img.alt = this.label;

  this.container.appendChild(img);
}

function getPhotoUrls(photos){
  return photos.map(function(photo){
    return photo.url;
  })
}

function App(config){
  this.label = config.label;
};

App.prototype.start = function start(container, photos){
  this.container = container;

  getPhotoUrls(photos).forEach(photoAppender);
}


module.exports = App;
