'use strict';

/**
 * @ngdoc service
 * @name yoteprestoclientApp.profileFinished
 * @description
 * # profileFinished
 * Service in the yoteprestoclientApp.
 */
angular.module('yoteprestoclientApp')
  .service('profileFinished', function (localStorageService) {
    return {
      set: function(value) {
        localStorageService.add('profileFinished', value);
      },
      get: function(key) {
        var profileFinished = localStorageService.get('profileFinished');
        if (profileFinished == true)
          return true;
        else
          return false;
      }
    }
  });
