'use strict';

module.exports.tasks = {
  less: {
    development: {
      files: {
        '<%= paths.css %>/essence.css': '<%= paths.less %>/essence.less',
        '<%= paths.css %>/icons.css': '<%= paths.less %>/icons.less'
      }
    },

    production: {
      options: {
        compress: true,
        yuicompress: true
      },
      files: {
        '<%= paths.css %>/essence.min.css': '<%= paths.less %>/essence.less',
        '<%= paths.css %>/icons.min.css': '<%= paths.less %>/icons.less'
      }
    }
  }
};
