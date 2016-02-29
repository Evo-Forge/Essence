'use strict';

var gulp         = require('gulp'),
    util         = require('gulp-util'),
    less         = require('gulp-less'),
    config       = require('../config'),
    logger       = require('../utils/bundle-logger'),
    handleErrors = require('../utils/handle-errors');

gulp.task('styles', function () {
  return gulp.src(config.styles.entries)
    // preprocess less files
    .pipe(less())

    // on data log less source directory
    .on('data', logger.read.bind(null, config.styles.src))

    // on error, log error and do not stop the process
    .on('error', handleErrors)

    // save to destination directory
    .pipe(gulp.dest(config.styles.dest))

    // on end log message
    .on('end', logger.end.bind(null, 'essence.css'));
});
