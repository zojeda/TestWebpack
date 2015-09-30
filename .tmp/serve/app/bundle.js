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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var MainController = function MainController() {
	  'ngInject';
	
	  _classCallCheck(this, MainController);
	
	  this.mainMessage = 'Hello World';
	};
	
	exports['default'] = MainController;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';
	  $stateProvider.state('main', {
	    abstract: true,
	    templateUrl: 'main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  });
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTdkNTk2YTU5YzU0NDk0MTFkZjYiLCJ3ZWJwYWNrOi8vL0Y6L0F4aW9tYS9Qcm90ZXVzL1Rlc3RXZWJwYWNrL3NyYy9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL0Y6L0F4aW9tYS9Qcm90ZXVzL1Rlc3RXZWJwYWNrL3NyYy9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vRjovQXhpb21hL1Byb3RldXMvVGVzdFdlYnBhY2svc3JjL2luZGV4LnJvdXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLGFBQVksQ0FBQzs7OzsrQ0FDYyxDQUF3Qjs7Ozt1Q0FFMUIsQ0FBZTs7OztBQUV4QyxRQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ2pDLE1BQU0seUJBQWMsQ0FFcEIsVUFBVSxDQUFDLGdCQUFnQixrQ0FBaUIsQzs7Ozs7Ozs7Ozs7Ozs7S0NSekMsY0FBYyxHQUNQLFNBRFAsY0FBYyxHQUNKO0FBQ1osYUFBVSxDQUFDOzt5QkFGVCxjQUFjOztBQUdoQixPQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztFQUNsQzs7c0JBR1ksY0FBYzs7Ozs7Ozs7O0FDUDdCLFVBQVMsWUFBWSxDQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtBQUN6RCxhQUFVLENBQUM7QUFDWCxpQkFBYyxDQUNiLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDYixhQUFRLEVBQUUsSUFBSTtBQUNkLGdCQUFXLEVBQUMsZ0JBQWdCO0FBQzVCLGVBQVUsRUFBRSxnQkFBZ0I7QUFDNUIsaUJBQVksRUFBRSxNQUFNO0lBQ3JCLENBQUM7RUFDSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYTdkNTk2YTU5YzU0NDk0MTFkZjZcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSAnLi9tYWluL21haW4uY29udHJvbGxlcic7XG5cbmltcG9ydCByb3V0ZXJDb25maWcgZnJvbSAnLi9pbmRleC5yb3V0ZSc7XG5cbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlciddKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcblxuICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBGOi9BeGlvbWEvUHJvdGV1cy9UZXN0V2VicGFjay9zcmMvaW5kZXgubW9kdWxlLmpzXG4gKiovIiwiY2xhc3MgTWFpbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuICAgIHRoaXMubWFpbk1lc3NhZ2UgPSAnSGVsbG8gV29ybGQnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2xsZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEY6L0F4aW9tYS9Qcm90ZXVzL1Rlc3RXZWJwYWNrL3NyYy9tYWluL21haW4uY29udHJvbGxlci5qc1xuICoqLyIsImZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICduZ0luamVjdCc7XHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAuc3RhdGUoJ21haW4nLCB7XHJcbiAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgIHRlbXBsYXRlVXJsOidtYWluL21haW4uaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxyXG4gICAgY29udHJvbGxlckFzOiAnbWFpbidcclxuICB9KVxyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBGOi9BeGlvbWEvUHJvdGV1cy9UZXN0V2VicGFjay9zcmMvaW5kZXgucm91dGUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9