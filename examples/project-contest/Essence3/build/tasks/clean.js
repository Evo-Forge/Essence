'use strict';

var del    = require('del'),
    gulp   = require('gulp'),
    config = require('../config');

gulp.task('clean', function (callback) {
  callback = callback || function () {};

  del([config.scripts.clean, config.styles.clean], callback);
});
