'use strict';

/**
 * @ngdoc function
 * @name yoteprestoclientApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the yoteprestoclientApp
 */
angular.module('yoteprestoclientApp')
  .controller('ProfileCtrl', function ($scope, $rootScope, $window, $auth, $filter, User, formatErrors, profileFinished) {
    $scope.profileFinished = profileFinished.get();
    $scope.sexOptions = ['', 'Male', 'Female'];
    
    $scope.user = User.get(function(data){
      $scope.progress = progressPercentage(data);
      setProfileFinished(data['finished']);
    });
    
    $scope.updateUser = function() { 
      $scope.user.$update(function(data){
        $scope.alertMessage = 'Your profile was updated.';
        $scope.alertType = 'alert-success';
        setProfileFinished(data['finished']);
      }, function(err) {
        $scope.alertMessage = formatErrors.query(err.data);
        $scope.alertType = 'alert-danger';
      });
    };

    $rootScope.$on('auth:logout-success', function(ev) {
      $window.location.href = '/#/';
    });

    $rootScope.$on('auth:logout-error', function(ev, reason) {
      $window.location.href = '/#/';
    });

    function progressPercentage(data) {
      var attributesAmount = Object.keys(data).length - 3;
      var emptyAttributes = $filter('emptyAttributes')(data) - 1;
      if (emptyAttributes < 1)
        return 100;
      else
        return Math.ceil((emptyAttributes / attributesAmount) * 100);
    }

    function setProfileFinished(finished) {
      profileFinished.set(finished);
      $scope.profileFinished = finished;
    }
  });

