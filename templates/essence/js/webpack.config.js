var path = require('path');
var react = require('react');
var webpack = require('webpack');
 
module.exports = {
  entry: path.resolve(__dirname, 'essence.js'),
  output: { 
    path: path.resolve(__dirname, '../build/'), 
    publicPath: '/build/',
    filename: 'essence.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
        extensions: ['.jsx', '.js'],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true
        },
    }),
  ]
};