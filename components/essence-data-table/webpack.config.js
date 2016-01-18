var path = require('path');
var react = require('react');
var webpack = require('webpack');
 
module.exports = {
  entry: {
    'body': path.resolve(__dirname, './src/body.jsx'),
    'column': path.resolve(__dirname, './src/column.jsx'),
    'footer': path.resolve(__dirname, './src/footer.jsx'),
    'header': path.resolve(__dirname, './src/header.jsx'),
    'row': path.resolve(__dirname, './src/row.jsx'),
    'table': path.resolve(__dirname, './src/table.jsx')
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
  }
};