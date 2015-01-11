var gulp = require('gulp');
var rename = require("gulp-rename");
var sass = require('gulp-ruby-sass');
var cssmin = require('gulp-cssmin');
var livereload = require('gulp-livereload');

SRC_COPY = ['www/*.html'];
SRC_SASS = ['www/css/*.scss'];

gulp.task('default', ['copy', 'sass'], function() {
  // place code for your default task here
});

gulp.task('copy', function() {
   gulp.src(SRC_COPY)
       .pipe(gulp.dest('build'))

       .pipe(livereload());
});

gulp.task('sass', function() {
    gulp.src('www/css/*.scss')

        .pipe(sass())
        .pipe(gulp.dest('build/css'))
        .pipe(livereload())

        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'))

        .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch(SRC_COPY, ['copy']);
    gulp.watch(SRC_SASS, ['sass']);

    livereload.listen();
});