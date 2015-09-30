var angular = require('angular');


var ngModule = angular.module('app', []);

class A  {
  someMethod() {
    console.log('someMethod');
  }
}
console.log(ngModule);
