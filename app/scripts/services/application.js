'use strict';

/**
 * @ngdoc service
 * @name yoteprestoclientApp.application
 * @description
 * # application
 * Service in the yoteprestoclientApp.
 */
angular.module('yoteprestoclientApp')
  .service('Application', function ($resource) {
    return $resource('https://yoteprestoapi.herokuapp.com/api/v1/applications/:id', { id: '@_id' }, {
        'update': { method:'PUT', params: {id: '@id'} }
      });
  });
