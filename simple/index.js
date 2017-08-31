var App = require('./src/app');
var config = require('./config/config.json');

var app = new App(config);
var container = document.getElementById('container');
var photos = [
  "https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg",
  "https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg",
  "https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg",
];


app.start(container, photos);
