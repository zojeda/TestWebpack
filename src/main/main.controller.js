'use strict';

class MainController {
  constructor() {
    'ngInject';
    this.mainMessage = 'Hello World';
  }
  updateMsg() {
    this.mainMessage = "SIIIII";
  }
}

export default MainController;
