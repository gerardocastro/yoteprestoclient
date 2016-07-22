'use strict';

describe('Service: formatErrors', function () {

  // load the service's module
  beforeEach(module('yoteprestoclientApp'));

  // instantiate service
  var formatErrors;
  beforeEach(inject(function (_formatErrors_) {
    formatErrors = _formatErrors_;
  }));

  it('should do something', function () {
    expect(!!formatErrors).toBe(true);
  });

});
