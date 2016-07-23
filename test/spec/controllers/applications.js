'use strict';

describe('Controller: ApplicationsCtrl', function () {

  // load the controller's module
  beforeEach(module('yoteprestoclientApp'));

  var ApplicationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplicationsCtrl = $controller('ApplicationsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApplicationsCtrl.awesomeThings.length).toBe(3);
  });
});
