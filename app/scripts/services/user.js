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
    return $resource('https://yoteprestoapi.herokuapp.com/api/v1/users', null, {
        'update': { method:'PUT' }
      });
  });
