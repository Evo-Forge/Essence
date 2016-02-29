'use strict';

var config = require('../config');
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  return gulp
    .src(config.scripts.dist)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
