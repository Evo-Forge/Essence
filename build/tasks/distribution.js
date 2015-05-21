'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('distribution', ['clean'], function (callback) {
  callback = callback || function () {};

  runSequence(['jsx-to-js', 'styles'], 'jshint', callback);
});
