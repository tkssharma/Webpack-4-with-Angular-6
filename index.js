const express = require('express');
const webpack = require('webpack');
const webpackconfig = require('./webpack.dev');
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
app.use(express.static('dist'));
const webpackCompiler = webpack(webpackconfig);
const wpmw = webpackMiddleware(webpackCompiler, {});
app.use(wpmw);
const wphmw = webpackHotMiddleware(webpackCompiler);
app.use(wphmw);
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});