'use strict';

module.exports.tasks = {
  watch: {
    options: {
      interrupt: true
    },

    styles: {
      files: [
        'Gruntfile.js',
        '<%= paths.tasks %>',
        '<%= paths.less %>/**/*.less',
        '<%= paths.javascripts %>/**/*.js'
      ],
      tasks: ['less', 'browserify']
    }
  }
};
