'use strict';

/**
 * @ngdoc service
 * @name yoteprestoclientApp.user
 * @description
 * # user
 * Factory in the yoteprestoclientApp.
 */
angular.module('yoteprestoclientApp')
  .factory('User', function ($resource) {
    return $resource('http://localhost:3000/api/v1/users', null, {
        'update': { method:'PUT' }
      });
  });
