const HtmlWebPackPlugin = require('html-webpack-plugin');
const Fiber = require('fibers');
// const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  entry: {
    'public/client': './src/index.js',
    'public/service-worker': './src/service-worker.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    }),
    htmlPlugin
  ],
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
        test: /\.(scss|css)$/,
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
  // plugins: [
  //   htmlPlugin,
  // ]
};
