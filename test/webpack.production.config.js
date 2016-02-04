var path = require('path');
var webpack = require('webpack');
var extractCSS = require('extract-text-webpack-plugin');
 
module.exports = {
  entry: {
    'appbar': path.resolve(__dirname, '../src/components/essence-appbar/appbar.jsx'),
    // 'block': path.resolve(__dirname, '../src/components/essence-block/block.jsx'),
    // 'bottomsheet': path.resolve(__dirname, '../src/components/essence-bottomsheet/bottomsheet.jsx'),
    // 'button': path.resolve(__dirname, '../src/components/essence-button/button.jsx'),
    // 'card': path.resolve(__dirname, '../src/components/essence-card/card.jsx'),
    // 'chip': path.resolve(__dirname, '../src/components/essence-chip/chip.jsx'),
    // 'core': path.resolve(__dirname, '../src/components/essence-core/core.jsx'),
    // 'dialog': path.resolve(__dirname, '../src/components/essence-dialog/dialog.jsx'),
    // 'divider': path.resolve(__dirname, '../src/components/essence-divider/divider.jsx'),
    // 'icon': path.resolve(__dirname, '../src/components/essence-icon/icon.jsx'),
    // 'image': path.resolve(__dirname, '../src/components/essence-image/image.jsx'),
    // 'input': path.resolve(__dirname, '../src/components/essence-input/input.jsx'),
    // 'list': path.resolve(__dirname, '../src/components/essence-list/list.jsx'),
    // 'menu': path.resolve(__dirname, '../src/components/essence-menu/menu.jsx'),
    // 'navigation': path.resolve(__dirname, '../src/components/essence-navigation/navigation.jsx'),
    // 'paper': path.resolve(__dirname, '../src/components/essence-paper/paper.jsx'),
    // 'progress': path.resolve(__dirname, '../src/components/essence-progress/progress.jsx'),
    // 'slider': path.resolve(__dirname, '../src/components/essence-slider/slider.jsx'),
    // 'snackbar': path.resolve(__dirname, '../src/components/essence-snackbar/snackbar.jsx'),
    // 'switch': path.resolve(__dirname, '../src/components/essence-switch/switch.jsx'),
    // 'text': path.resolve(__dirname, '../src/components/essence-text/text.jsx'),
    // 'toast': path.resolve(__dirname, '../src/components/essence-toast/toast.jsx')
  },
  output: { 
    // path: path.resolve(__dirname, '../src/components'), 
    path: path.resolve(__dirname, '../lib'), 
    publicPath: '/lib',
    filename: 'essence-[name]/[name].js'
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
        loader: extractCSS.extract('style-loader', 'css-loader!less-loader')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.md$/,
        loader: 'file?name=../lib/essence-[name]/[name].[ext]'
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
            warnings: false
        },
    }),
    new extractCSS('essence-[name]/[name].css')
  ]
};