'use strict';

/**
 * @ngdoc directive
 * @name yoteprestoclientApp.directive:alert
 * @description
 * # alert
 */
angular.module('yoteprestoclientApp')
  .directive('alert', function () {
    return {
      restrict: 'E',
      template: '<div ng-if="alertMessage" class="alert {{alertType}} text-center" role="alert">{{alertMessage}}</div>'
    };
  });
