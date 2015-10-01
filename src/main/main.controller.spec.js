describe('MainController tests', function() {
  beforeEach(
    module('app')
  );
  var mainController, $controller;

  beforeEach(inject(function(_$controller_){
    //module('app');
    $controller = _$controller_;
    mainController = $controller('MainController');
  }));

  it('should have initial message', function() {
    expect(mainController.mainMessage).toEqual('Hello World');
  });

  it('should have updatedMsg ', function() {
    mainController.updateMsg();
    console.log('siiii')

    expect(mainController.mainMessage).toEqual('SIIIII');
  });
});
