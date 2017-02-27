const gulp = require('gulp-help')(require('gulp'));
const gulpIf = require('gulp-if');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const gutil = require("gulp-util");

const webpack = require('webpack');
const webackDevServer = require('webpack-dev-server');

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

gulp.task('build', 'builds production js files',function(callback) {
    webpack(require('./webpack.config.prod.js'), function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString());
      callback();
    });
});

gulp.task('devServer', 'watchs js files', function (callback) {
  var compiler = webpack(require('./webpack.config.dev.js'));

  new webackDevServer(compiler).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

    // keep the server alive or continue?
    // callback();
  });
});