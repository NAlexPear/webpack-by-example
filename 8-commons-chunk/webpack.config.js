var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './index.js',
    admin: './admin.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'common' }),
    new HTMLWebpackPlugin({
      chunks:['common','app']
    }),
    new HTMLWebpackPlugin({
      filename: 'admin/index.html',
      chunks:['common','admin']
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { modules: false }]],
            plugins: ['transform-promise-to-bluebird'],
          }
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
    ]
  }
};
