'use strict';

describe('Filter: profileProgress', function () {

  // load the filter's module
  beforeEach(module('yoteprestoclientApp'));

  // initialize a new instance of the filter before each test
  var profileProgress;
  beforeEach(inject(function ($filter) {
    profileProgress = $filter('profileProgress');
  }));

  it('should return the input prefixed with "profileProgress filter:"', function () {
    var text = 'angularjs';
    expect(profileProgress(text)).toBe('profileProgress filter: ' + text);
  });

});
