'use strict';

module.exports = function (grunt, options) {
  return {
    essence: {
      files: {
        '<%= paths.js %>/application.js': ['<%= paths.javascripts %>/application.js'],
        '<%= paths.js %>/essence.js': ['<%= paths.javascripts %>/essence.js']
      },
      options: {
        transform: [
          ['reactify', {'es6': true}]
        ],
        watch: true,
        keepAlive: true
      }
    }
  }
};
