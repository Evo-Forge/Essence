'use strict';

var gulp   = require('gulp'),
    babel  = require('gulp-babel'),
    config = require('../config');


gulp.task('jsx-to-js', function () {
  return gulp
    .src(config.scripts.src)
    .pipe(babel())
    .pipe(gulp.dest(config.scripts.dest));
});
