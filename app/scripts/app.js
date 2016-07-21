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
    'ng-token-auth'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'UserSessionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($authProvider) {
    $authProvider.configure({
      apiUrl:                 'http://localhost:3000/api/v1',
      tokenValidationPath:    '/auth/validate_token',
      signOutUrl:             '/auth/sign_out',
      emailRegistrationPath:  '/auth/auth',
      confirmationSuccessUrl: window.location.href,
      emailSignInPath:        '/auth/sign_in',
      authProviderPaths: {
        github:   '/auth/github',
        facebook: '/auth/facebook',
        google:   '/auth/google'
      }
    });
  });
