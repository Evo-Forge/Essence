var path = require('path');
var react = require('react');
var webpack = require('webpack');
 
module.exports = {
  entry: {
    'block': path.resolve(__dirname, './src/block/block.jsx'),
    'divider': path.resolve(__dirname, './src/divider/divider.jsx'),
    'text': path.resolve(__dirname, './src/text/text.jsx'),
    'highlighter': path.resolve(__dirname, './src/highlighter/highlighter.jsx'),
    'rippleink': path.resolve(__dirname, './src/rippleink/rippleink.jsx'),
    'utils': path.resolve(__dirname, './src/utils/utils'),
    // 'css': path.resolve(__dirname, './src/less/css'),
    'index': path.resolve(__dirname, './src/index'),
  },
  output: { 
    path: path.resolve(__dirname, './lib'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
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