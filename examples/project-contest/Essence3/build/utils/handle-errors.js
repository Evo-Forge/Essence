'use strict';

var notify = require('gulp-notify'),
    util   = require('gulp-util');

module.exports = function (error) {
  if(!util.env.production) {
    var args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    notify.onError({
      title: 'Compile Error',
      message: '<%= error.message %>'
    }).apply(this, args);

    this.emit('end');

  } else {
    // Log the error and stop the process to prevent broken code from building
    console.log(error);
    process.exit(1);
  }
};
