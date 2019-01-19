const HtmlWebPackPlugin = require('html-webpack-plugin');
const Fiber = require('fibers');
// const nodeExternals = require('webpack-node-externals');
// const path = require('path');
// const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  // entry: {
  //   'server': './server/server.js',
  //   'public/client': './src/index.js',
  //   'public/css': './src/index.scss',
  // },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   // filename: 'server.js',
  //   publicPath: '/'
  // },
  // target: 'node',
  // externals: nodeExternals(),
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: `'production'`
  //     }
  //   })
  // ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg/,
        use: {
            loader: 'svg-url-loader',
            options: {}
        }
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.scss$/,
        // use: ["style-loader", "sass-loader"]
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
            fiber: Fiber
          }
        }]
      }
    ]
  },
  plugins: [
    htmlPlugin,
  ]
};
