const gulp = require('gulp-help')(require('gulp'));
const gulpIf = require('gulp-if');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const webpack = require('gulp-webpack');

function isFixed(file) {
  return file.eslint !== null && file.eslint.fixed;
}

gulp.task('lint', 'lints all js', function () {
  return gulp.src(['**/*.js','!node_modules/**', '!build/**'])
    .pipe(plumber())
    .pipe(eslint({fix: true}))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('./')));
});

gulp.task('build', 'builds js files', function () {
  return gulp.src('./js/app/**')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./build/'));
});