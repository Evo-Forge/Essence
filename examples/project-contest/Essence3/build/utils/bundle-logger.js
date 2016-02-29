'use strict';

var gutil        = require('gulp-util'),
    prettyHrtime = require('pretty-hrtime'),
    startTime;

module.exports = {
  read: function (file) {
    startTime = process.hrtime();
    gutil.log(
      'Reading from ',
      gutil.colors.blue(file),
      '...'
    );
  },

  start: function (file) {
    startTime = process.hrtime();
    gutil.log(
      'Building ',
      gutil.colors.green(file),
      '...'
    );
  },

  watch: function(bundle) {
    gutil.log(
      'Watching changes for',
      gutil.colors.yellow(bundle)
    );
  },

  end: function (file) {
    var taskTime = process.hrtime(startTime),
        prettyTime = prettyHrtime(taskTime);

    gutil.log(
      'Finished',
      gutil.colors.green(file), 'in',
      gutil.colors.magenta(prettyTime)
    );
  }
};
