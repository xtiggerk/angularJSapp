'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    cssnano = require('gulp-cssnano'),
    stream = require('browser-sync').stream;

var config = require('./config');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

//** SASS DEV TASK **//

gulp.task('sass', function() {
  return gulp.src(config.src + 'styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: []
    }))
    .on('error', handleError)
    .pipe(postcss([
      require('autoprefixer')(['last 2 versions', "> 1%"]),
      require('postcss-assets')({
        loadPaths: [config.img],
        basePath: config.src
      })
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest( config.src + 'css'))
    .pipe(stream());
});


//** SASS BUILD TASK **//

gulp.task('sass-build', function(){
   return gulp.src(config.src + 'styles/**/*.scss')
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: []
    }))
    .on('error', handleError)
    .pipe(postcss([
      require('autoprefixer')(['last 2 versions', "> 1%"]),
      require('postcss-assets')({
        loadPaths: [config.img],
        basePath: config.src
      })
    ]))
    .pipe(cssnano('sass'))
    .pipe(gulp.dest( config.dist + 'css'))
    .pipe(stream());
  });