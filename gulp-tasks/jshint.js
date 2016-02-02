'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src('../app/js/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});