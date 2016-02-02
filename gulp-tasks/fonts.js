'use strict';

var gulp = require('gulp');
    
var config = require('./config');

gulp.task('fonts-build', function () {
  return gulp.src(config.src + 'fonts/**/*')
    .pipe(gulp.dest(config.dist + 'fonts' ));
  return gulp.src(config.src + '')
});