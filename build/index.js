'use strict';

var fs           = require('fs'),
    gulp 		 = require('gulp'),
    buildScripts = require('./utils/script-filter'),
    tasks        = fs.readdirSync('./build/tasks/').filter(buildScripts);

tasks.forEach(function (task) {
  require('./tasks/' + task);
});

gulp.task('default', ['distribution'] , function() {
	gulp.watch(['src/js/**/*.js', 'src/less/**/*.less', ], ['distribution']);
});
