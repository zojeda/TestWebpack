var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');


gulp.task('webpack', function() {
  return gulp.src('src/app/app.js')
    .pipe(gulpWebpack(require('../webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});
