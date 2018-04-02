const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode:'development',
  entry: {
    main: './main/main.js',
    renderer: './app/snake.js'
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  externals:{
    "electron": "require('electron')",
    "fs": "require('fs')",
    "path": "require('path')"
  },

  devtool:"eval",

  module: {
    rules: [{
      "test": /\.html$/,
      "loader": "html-loader"
      },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',

      options: {
        presets: ['env']
      }
    }, {
      test: /\.(scss|css)$/,

      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },

  plugins: [ new HtmlWebpackPlugin({
    template:"./index.html",
    filename:"./index.html",
  })],

  "node": {
    __dirname: false,
    __filename: false
  }
}