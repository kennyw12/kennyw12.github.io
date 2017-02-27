const gulp = require('gulp-help')(require('gulp'));
const gulpIf = require('gulp-if');
const eslint = require('gulp-eslint');

function isFixed(file) {
  return file.eslint !== null && file.eslint.fixed;
}

gulp.task('lint', 'lints all js', function () {
  return gulp.src(['**/*.js','!node_modules/**', '!build/**'])
    .pipe(eslint({fix: true}))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('./')));
});