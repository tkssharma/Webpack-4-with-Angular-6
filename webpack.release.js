var commonConfig = require('./webpack.common.js');

var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

const nodeModules = path.join(process.cwd(), 'node_modules');

const NoEmitOnErrorsPlugin = webpack.NoEmitOnErrorsPlugin;
// const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin ;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const autoprefixer = require('autoprefixer');
module.exports = webpackMerge(commonConfig, {

    devtool: 'source-map',
    mode: "production", // mode: "development" || "production",


    entry: {
        'polyfills': './src/polyfills.ts',
        'main': ['./src/main.ts', './src/styles/app.css']
    },

    output: {
        path: root('dist'),
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js'
    },

    module: {
        rules: [
            {
                "test": /\.(eot|svg)$/,
                "loader": "file-loader?name=assets/[name].[hash:20].[ext]"
            },
            {
                "test": /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
                "loader": "url-loader?name=assets/[name].[hash:20].[ext]&limit=8192"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
                include: [root('src', 'styles')]
            },

            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.js$/,
                loader: '@angular-devkit/build-optimizer/webpack-loader',
                options: {
                    sourceMap: false
                }
            }

        ]
    },
    plugins: [

        new AngularCompilerPlugin({
            "mainPath": "src/main.ts",
            "tsConfigPath": "tsconfig.app.json"
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: function (a, b) {
                var order = ["polyfills", "vendor", "main"];
                return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
            },
           // excludeChunks: lazyChunks,
            xhtml: true,
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            }

        }),

        new ExtractTextPlugin({filename: '[name].[hash].css'})

    ],
    node: {
        global: true,
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    },

    stats: {
        colors: true,
        hash: true,
        timings: true,
        chunkModules: false,
        modules: true,
        maxModules: 0,
        reasons: false,
        warnings: true,
        version: false,
        assets: true,
        chunks: false,
        children: false
    }
});

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
