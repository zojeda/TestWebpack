var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');

var path = require("path");
var webpack = require("webpack");

var webpackConfig = {
  module: {
    entry: './src/app/app.js',
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }],
    resolve: {
        root: [path.join(__dirname, "bower_components")]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
  }
}

gulp.task('webpack', function() {
  return gulp.src('src/app/app.js')
    .pipe(gulpWebpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});
