'use strict';

/**
 * @ngdoc overview
 * @name yoteprestoclientApp
 * @description
 * # yoteprestoclientApp
 *
 * Main module of the application.
 */
angular
  .module('yoteprestoclientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'UserSessionCtrl',
        reloadOnSearch: true,
        resolve: {
          auth: function($auth, $window) {
            var validation = $auth.validateUser();
            validation.then(function(resp){
                $window.location.href = '/#/profile';
              });
          }
        }
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          auth: function($auth, $window) {
            $auth.validateUser().catch(function(resp){
                $window.location.href = '/#/';
              });
          }
        }
      })
      .when('/applications', {
        templateUrl: 'views/applications.html',
        controller: 'ApplicationsCtrl',
        resolve: {
          auth: function($auth, $window) {
            $auth.validateUser().catch(function(resp){
                $window.location.href = '/#/';
              });
          }
        }
      })
      .otherwise({
        redirectTo: '/#/'
      });
  })
  .config(function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  })
  .config(function($authProvider) {
    $authProvider.configure({
      apiUrl:                 'http://localhost:3000/api/v1',
      tokenValidationPath:    '/auth/validate_token',
      signOutUrl:             '/auth/sign_out',
      emailRegistrationPath:  '/auth/auth',
      emailSignInPath:        '/auth/sign_in',
      authProviderPaths: {
        facebook: '/auth/facebook',
      }
    });
  });
