function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  .state('main', {
    abstract: true,
    templateUrl:'main/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  })
};
