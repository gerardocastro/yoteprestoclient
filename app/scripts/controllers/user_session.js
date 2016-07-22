'use strict';

/**
 * @ngdoc function
 * @name yoteprestoclientApp.controller:UserSessionCtrl
 * @description
 * # UserSessionCtrl
 * Controller of the yoteprestoclientApp
 */
angular.module('yoteprestoclientApp')
  .controller('UserSessionCtrl', function ($scope, $rootScope, $auth, $window) {
    $scope.loginError = false;

    $rootScope.$on('auth:login-error', function(ev, reason) {
      $scope.loginError = true;
      $scope.loginErrorMessage = reason.errors[0];
    });

    $rootScope.$on('auth:login-success', function(ev, reason) {
      $window.location.href = '/#/profile';
    });
  });
