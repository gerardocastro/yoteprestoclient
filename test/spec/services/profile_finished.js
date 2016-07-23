'use strict';

describe('Service: profileFinished', function () {

  // load the service's module
  beforeEach(module('yoteprestoclientApp'));

  // instantiate service
  var profileFinished;
  beforeEach(inject(function (_profileFinished_) {
    profileFinished = _profileFinished_;
  }));

  it('should do something', function () {
    expect(!!profileFinished).toBe(true);
  });

});
