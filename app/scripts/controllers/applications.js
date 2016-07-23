'use strict';

/**
 * @ngdoc function
 * @name yoteprestoclientApp.controller:ApplicationsCtrl
 * @description
 * # ApplicationsCtrl
 * Controller of the yoteprestoclientApp
 */
angular.module('yoteprestoclientApp')
  .controller('ApplicationsCtrl', function ($scope, $rootScope, $window, $auth, $filter, Application, formatErrors, profileFinished) {
    if (!profileFinished.get()) $window.location.href = '/#/profile';
    $scope.profileFinished = profileFinished.get();
    $scope.canRemoveExpense = false;
    $scope.applications = Application.query();
    $scope.expensesTypes = ['Credit card', 
      'Entertaining', 
      'Services', 
      'School', 
      'Insurance', 
      'rent/Mortgage'];
    $scope.relationTypes = ['Friend', 
      'Co-worker', 
      'Neighbor'];

    $scope.newApplication = function() {
      $scope.alertMessage = null;
      $scope.action = 'create';
      $scope.applicationId = null;
      $scope.application = new Application();
      $scope.application['references_attributes'] = [{}, {}, {}];
      $scope.application['expenses_attributes'] = [{}];
    }

    $scope.editApplication = function(id) {
      $scope.alertMessage = null;
      $scope.action = 'update';
      $scope.applicationId = id;
      $scope.application = Application.get({id: id}, function(data) {
          if (data.expenses_attributes.length > 1) {
            $scope.canRemoveExpense = true;
          }
        }, function(err) {
          $scope.alertMessage = 'There was an error trying to get the application.';
          $scope.alertType = 'alert-danger';
        });
    }

    $scope.saveApplication = function() {
      if ($scope.action == 'create') {
        createApplication();
      } else {
        updateApplication();
      }
    };

    $scope.addExpense = function() {
      $scope.canRemoveExpense = true;
      $scope.application.expenses_attributes.push({})
    }

    $scope.removeExpense = function(index) {
      console.log(index);
      $scope.canRemoveExpense = false;
      $scope.application.expenses_attributes[index]._destroy = true;
    }

    $rootScope.$on('auth:logout-success', function(ev) {
      $window.location.href = '/#/';
    });

    $rootScope.$on('auth:logout-error', function(ev, reason) {
      $window.location.href = '/#/';
    });

    function createApplication() {
      Application.save({application: $scope.application}, function(data) {
          $scope.alertMessage = 'Your application was created.';
          $scope.alertType = 'alert-success';
          $scope.applications.push(data);
        }, function(err){
          $scope.alertMessage = formatErrors.query(err.data);
          $scope.alertType = 'alert-danger';
        });
    }

    function updateApplication(id) {
      $scope.application = Application.update({id: $scope.applicationId, application: $scope.application}, 
        function(data){
          refreshApplication(id, angular.copy(data));
          $scope.alertMessage = 'Your application was upated.';
          $scope.alertType = 'alert-success';
        }, function(err) {
          $scope.alertMessage = formatErrors.query(err.data);
          $scope.alertType = 'alert-danger';
        });
    }

    function refreshApplication(id, data) {
      var applications = $scope.applications;
      var application = $filter("filter")(applications, {id: id}, true);
      var index = applications.indexOf(application[0]);
      applications.splice(index, 1);
      applications.push(data);
    }
  });
