'use strict';
import MainController from './main/main.controller';

import routerConfig from './index.route';

angular.module('app', ['ui.router'])
  .config(routerConfig)

  .controller('MainController', MainController);
