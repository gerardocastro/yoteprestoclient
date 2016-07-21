'use strict';

describe('Controller: UserSessionCtrl', function () {

  // load the controller's module
  beforeEach(module('yoteprestoclientApp'));

  var UserSessionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserSessionCtrl = $controller('UserSessionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserSessionCtrl.awesomeThings.length).toBe(3);
  });
});
