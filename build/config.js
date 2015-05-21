'use strict';

module.exports = {
  scripts: {
    src:    './src/js/**/*.js',
    dist:   './dist/js/**/*.js',
    dest:   './dist/js',
    clean:  './dist/js/*.js'
  },

  styles: {
    entries:  './src/less/essence.less',
    src:      './src/less/**/*.less',
    dest:     './dist/css',
    clean:    './dist/css/*.css'
  },

  production: {
    basename: 'essence',
    suffix: '.min',
    dirname: './'
  },

  minifyCSS: {
    keepBreaks: false,
    keepSpecialComments: false,
    roundingPrecision: -1
  },


  uglify: {
    compress: {
      drop_debugger: true
    }
  }
};
