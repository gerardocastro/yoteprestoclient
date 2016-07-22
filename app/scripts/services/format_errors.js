'use strict';

/**
 * @ngdoc service
 * @name yoteprestoclientApp.formatErrors
 * @description
 * # formatErrors
 * Factory in the yoteprestoclientApp.
 */
angular.module('yoteprestoclientApp')
  .factory('formatErrors', function ($resource) {
    return {
      query: function(errors) {
        if (Object.keys(errors).length > 0) {
          var error = '';
          for(var key in errors) {
            error += key +': '+ errors[key] +'\n';
          }
          return error;
        } else {
          return 'All fields must be filled.';
        }
      }
    }
  });
