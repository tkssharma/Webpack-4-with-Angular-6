const webpack = require("webpack");
const ngcWebpack = require("ngc-webpack");

var path = require("path");

var _root = path.resolve(__dirname, ".");

function getRoot(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

module.exports = function(env, argv) {
  return {
    mode: env.production ? 'production' : 'development',

    entry: {
      app: "./src/main.ts",
      polyfills: "./src/polyfills.ts"
    },

    target: "web",
    
    devtool: env.production ? false : "inline-source-map",

    output: {
      path: getRoot("dist"),
      publicPath: "/",
      filename: "[name].js"
    },

    resolve: {
      extensions: [".js", ".ts", ".html"]
    },

    module: {
      rules: [
        {
          test: /.js$/,
          parser: {
            system: true
          }
        },
        // Typescript
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: "@ngtools/webpack"
        }
      ]
    },
    plugins: [
      new ngcWebpack.NgcWebpackPlugin({
        tsConfigPath: "./tsconfig.json",
        mainPath: "./src/main.ts"
      })
    ]
  };
};
