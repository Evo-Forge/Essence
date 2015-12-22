var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
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
        include: [
          path.resolve(__dirname, "./"),
        ],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
        // loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
    }),
    new ExtractTextPlugin('essence-[name]/[name].css')
  ]
};