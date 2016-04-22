var path = require('path');
var webpack = require('webpack');
var isProduction = process.argv.indexOf('--PRODUCTION') !== -1;
if(isProduction) process.env.NODE_ENV = 'production';
module.exports = {
  entry: path.resolve(__dirname, 'index.dist.js'),
  output: {
    path: path.resolve(__dirname, 'lib/'),
    publicPath: '/',
    filename: isProduction ? 'essence.min.js' : "essence.js"
  },
  resolve: {
    alias: {
      'essence-appbar': path.normalize(__dirname + '/components/essence-appbar'),
      'essence-bottomsheet': path.normalize(__dirname + '/components/essence-bottomsheet'),
      'essence-button':path.normalize(__dirname + '/components/essence-button'),
      'essence-card': path.normalize(__dirname + '/components/essence-card'),
      'essence-chip': path.normalize(__dirname + '/components/essence-chip'),
      'essence-core': path.normalize(__dirname + '/components/essence-core'),
      'essence-data-table': path.normalize(__dirname + '/components/essence-data-table'),
      'essence-dialog': path.normalize(__dirname + '/components/essence-dialog'),
      'essence-icon': path.normalize(__dirname + '/components/essence-icon'),
      'essence-image': path.normalize(__dirname + '/components/essence-image'),
      'essence-input': path.normalize(__dirname + '/components/essence-input'),
      'essence-list': path.normalize(__dirname + '/components/essence-list'),
      'essence-menu': path.normalize(__dirname + '/components/essence-menu'),
      'essence-navigation': path.normalize(__dirname + '/components/essence-navigation'),
      'essence-paper': path.normalize(__dirname + '/components/essence-paper'),
      'essence-progress': path.normalize(__dirname + '/components/essence-progress'),
      'essence-slider': path.normalize(__dirname + '/components/essence-slider'),
      'essence-snackbar': path.normalize(__dirname + '/components/essence-snackbar'),
      'essence-stepper': path.normalize(__dirname + '/components/essence-stepper'),
      'essence-switch': path.normalize(__dirname + '/components/essence-switch'),
      'essence-tab': path.normalize(__dirname + '/components/essence-tab'),
      'essence-toast': path.normalize(__dirname + '/components/essence-toast'),
      'essence-toolbar': path.normalize(__dirname + '/components/essence-toolbar'),
      'essence-tooltip': path.normalize(__dirname + '/components/essence-tooltip'),
      'essence-touchpad': path.normalize(__dirname + '/components/essence-touchpad')
    }
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
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        loader: 'url-loader?limit=30000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      minChunks: 2
    })
  ]
};
if(isProduction) {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false
    }
  }));
  module.exports.plugins.push(new webpack.optimize.MinChunkSizePlugin({
    minChunkSize: 51200 // ~50kb
  }));
}
