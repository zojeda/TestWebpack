// Karma configuration
// Generated on Thu Oct 01 2015 16:03:52 GMT-0200 (Argentina Standard Time)
var path = require('path');
var webpack = require('webpack');
var conf = require('./gulp/conf');

var _ = require('lodash');
var wiredep = require('wiredep');

function listFiles() {
  var wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  return wiredep(wiredepOptions).js
    .concat([
//      path.join(conf.paths.tmp, '/serve/app/bundle.js'),
      path.join(conf.paths.src, '/**/*.html'),
      path.join(conf.paths.src, '/**/*.js'),
      //path.join(conf.paths.src, '../test/index.js'),
      //path.join(conf.paths.src, '/**/*.spec.js')
    ]);
}

module.exports = function(config) {
  console.log(listFiles());
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: listFiles(),


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessor: {
      'src/**/*.js': ['coverage']
    },

    coverageReporter: {
          type : 'html',
          dir : 'coverage/',
          instrumenters: { isparta : require('isparta') },
          instrumenter: {
            '**/*.js': 'isparta'
          },
          instrumenterOptions: {
              istanbul: { noCompact: true }
          }

    },
    // plugins : [
    //   'karma-chrome-launcher',
    //   'karma-jasmine',
    //   'karma-webpack'
    // ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
