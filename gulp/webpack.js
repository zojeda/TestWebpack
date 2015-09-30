var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');
var gulpWebpack = require('gulp-webpack');


gulp.task('webpack', function() {
  return gulp.src('src/app/app.js')
    .pipe(gulpWebpack(require('../webpack.config.js')))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
});
