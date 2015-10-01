function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl:'main/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  });
  $urlRouterProvider.otherwise('/');
};

export default routerConfig;
