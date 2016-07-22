'use strict';

/**
 * @ngdoc filter
 * @name yoteprestoclientApp.filter:profileProgress
 * @function
 * @description
 * # profileProgress
 * Filter in the yoteprestoclientApp.
 */
angular.module('yoteprestoclientApp')
  .filter('emptyAttributes', function () {
    return function (data) {
      var empty = 0
      for(var key in data) {
        if (!data[key])
          empty += 1;
      } 
      return empty;
    };
  });
