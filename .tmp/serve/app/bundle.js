/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mainMainController = __webpack_require__(1);
	
	var _mainMainController2 = _interopRequireDefault(_mainMainController);
	
	var _indexRoute = __webpack_require__(2);
	
	var _indexRoute2 = _interopRequireDefault(_indexRoute);
	
	angular.module('app', ['ui.router']).config(_indexRoute2['default']).controller('MainController', _mainMainController2['default']);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var MainController = (function () {
	  function MainController() {
	    'ngInject';
	
	    _classCallCheck(this, MainController);
	
	    this.mainMessage = 'Hello World';
	  }
	
	  _createClass(MainController, [{
	    key: 'updateMsg',
	    value: function updateMsg() {
	      this.mainMessage = "SIIIII";
	    }
	  }]);
	
	  return MainController;
	})();
	
	exports['default'] = MainController;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';
	  $stateProvider.state('main', {
	    url: '/',
	    templateUrl: 'main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  });
	  $urlRouterProvider.otherwise('/');
	};
	
	exports['default'] = routerConfig;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTBiOWVkNGZjNjBiOGM0YWUzYzYiLCJ3ZWJwYWNrOi8vL0Y6L0F4aW9tYS9Qcm90ZXVzL1Rlc3RXZWJwYWNrL3NyYy9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL0Y6L0F4aW9tYS9Qcm90ZXVzL1Rlc3RXZWJwYWNrL3NyYy9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vRjovQXhpb21hL1Byb3RldXMvVGVzdFdlYnBhY2svc3JjL2luZGV4LnJvdXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLGFBQVksQ0FBQzs7OzsrQ0FDYyxDQUF3Qjs7Ozt1Q0FFMUIsQ0FBZTs7OztBQUV4QyxRQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ2pDLE1BQU0seUJBQWMsQ0FFcEIsVUFBVSxDQUFDLGdCQUFnQixrQ0FBaUIsQzs7Ozs7Ozs7Ozs7Ozs7OztLQ1J6QyxjQUFjO0FBQ1AsWUFEUCxjQUFjLEdBQ0o7QUFDWixlQUFVLENBQUM7OzJCQUZULGNBQWM7O0FBR2hCLFNBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO0lBQ2xDOztnQkFKRyxjQUFjOztZQUtULHFCQUFHO0FBQ1YsV0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7TUFDN0I7OztVQVBHLGNBQWM7OztzQkFVTCxjQUFjOzs7Ozs7Ozs7Ozs7QUNWN0IsVUFBUyxZQUFZLENBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO0FBQ3pELGFBQVUsQ0FBQztBQUNYLGlCQUFjLENBQ2IsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNiLFFBQUcsRUFBRSxHQUFHO0FBQ1IsZ0JBQVcsRUFBQyxnQkFBZ0I7QUFDNUIsZUFBVSxFQUFFLGdCQUFnQjtBQUM1QixpQkFBWSxFQUFFLE1BQU07SUFDckIsQ0FBQyxDQUFDO0FBQ0gscUJBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ25DLENBQUM7O3NCQUVhLFlBQVkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5MGI5ZWQ0ZmM2MGI4YzRhZTNjNlxuICoqLyIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tICcuL21haW4vbWFpbi5jb250cm9sbGVyJztcblxuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tICcuL2luZGV4LnJvdXRlJztcblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndWkucm91dGVyJ10pXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxuXG4gIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEY6L0F4aW9tYS9Qcm90ZXVzL1Rlc3RXZWJwYWNrL3NyYy9pbmRleC5tb2R1bGUuanNcbiAqKi8iLCJjbGFzcyBNYWluQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgdGhpcy5tYWluTWVzc2FnZSA9ICdIZWxsbyBXb3JsZCc7XHJcbiAgfVxyXG4gIHVwZGF0ZU1zZygpIHtcclxuICAgIHRoaXMubWFpbk1lc3NhZ2UgPSBcIlNJSUlJSVwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2xsZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEY6L0F4aW9tYS9Qcm90ZXVzL1Rlc3RXZWJwYWNrL3NyYy9tYWluL21haW4uY29udHJvbGxlci5qc1xuICoqLyIsImZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICduZ0luamVjdCc7XHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAuc3RhdGUoJ21haW4nLCB7XHJcbiAgICB1cmw6ICcvJyxcclxuICAgIHRlbXBsYXRlVXJsOidtYWluL21haW4uaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxyXG4gICAgY29udHJvbGxlckFzOiAnbWFpbidcclxuICB9KTtcclxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEY6L0F4aW9tYS9Qcm90ZXVzL1Rlc3RXZWJwYWNrL3NyYy9pbmRleC5yb3V0ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=