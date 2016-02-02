'use strict';

var gulp = require('gulp'),
browserSync = require('browser-sync'),
lint = require('gulp-jshint'),
reload = browserSync.reload;

var config = require('./config.json');

gulp.task('serve', ['sass', 'wiredep', 'lint'], function() {
  browserSync({
    notify: false,
    port: config.port,
    open: true,
    server: {
      baseDir: [ config.src ]
    }
  });

  gulp.watch([
    config.src + 'views/**/*.html',
    config.src + 'js/**/*.js',
    config.src + config.img + '**/*',
    config.src + 'fonts/**/*'
    ]).on('change', reload);

  gulp.watch([
    config.src + 'styles/**/*.scss'
    ], ['sass']);

  gulp.watch('bower.json', ['wiredep']);
});


gulp.task('serve-prod', ['sass-build', 'wiredep', 'lint'], function() {
  browserSync({
    notify: false,
    port: config.portProd,
    open: true,
    server: {
      baseDir: [ config.dist ]
    }
  });
});