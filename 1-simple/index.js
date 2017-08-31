var App = require('./src/app');
var config = require('./config/config.json');
var request = require('superagent');

var app = new App(config);
var container = document.getElementById('container');

request
  .get('http://jsonplaceholder.typicode.com/photos')
  .end(function(error, response){
    app.start(container, response.body.slice(0, 5));
  });
