const express = require('express');
const webpack = require('webpack');
const webpackconfig = require('../webpack.config');
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const app = express();

app.use(express.static('www'));

const webpackCompiler = webpack(webpackconfig);
const wpmw = webpackMiddleware(webpackCompiler,{});
app.use(wpmw);

const wphmw = webpackHotMiddleware(webpackCompiler);
app.use(wphmw);

var server = app.listen(3000, () => {
  server.keepAliveTimeout = 12000;  
  console.log('Example app listening on port 3000!')
});
