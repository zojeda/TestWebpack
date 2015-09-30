var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname + '/src',
  entry: './index.module.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  // loaders: [{
  //   test: /\.js$/,
  //   loader: 'babel-loader'
  // }],
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}]
  },
  devtool: 'inline-source-map'
  // resolve: {
  //   root: [path.join(__dirname, "bower_components")]
  // },
  // plugins: [
  //   new webpack.ResolverPlugin(
  //     new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
  //   )
  // ]

}
