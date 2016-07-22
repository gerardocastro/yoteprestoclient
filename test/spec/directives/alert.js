'use strict';

describe('Directive: alert', function () {

  // load the directive's module
  beforeEach(module('yoteprestoclientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<alert></alert>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the alert directive');
  }));
});
