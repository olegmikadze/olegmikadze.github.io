'use strict';

const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const jsminify = require('gulp-js-minify');
const image_min = require('gulp-imagemin');
/*
const gulp_sync = require('gulp-sync')(gulp);
*/

gulp.task('clean-dist', function () {
     gulp.src('./dist/*', {read:false})
        .pipe(clean());
});

gulp.task('js', function() {
     gulp.src('./src/js/*.js')
         .pipe(concat('concatenated.js'))
         .pipe(jsminify())
         .pipe(gulp.dest('./dist/js'))
         .pipe(browserSync.stream());
});

gulp.task('css', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(concat('concatenated.css'))
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());

});

gulp.task('libs', function () {
    gulp.src('./src/libs/**')
        .pipe(gulp.dest('./dist/libs'));
});


gulp.task('img', function () {
   gulp.src('./src/img/**')
    .pipe(image_min())
    .pipe(gulp.dest('./dist/img'))
    .pipe(browserSync.stream());

});

gulp.task('build', ['clean-dist', 'js', 'css', 'img', 'libs']);

gulp.task('dev', function() {

    browserSync.init({
        server: './'
    });

    gulp.watch('./src/scss/**/*.scss', ['css']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/img/**', ['img']);
    gulp.watch('./src/libs/**', ['libs']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});

gulp.task('default', ['build','dev']);

