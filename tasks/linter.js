'use strict';

module.exports.tasks = {
  lesslint: {
    src: ['<%= paths.less %>/**/*.less'],
    options: {
      imports: ['<%= paths.less %>/**/*.less']
    }
  }
};