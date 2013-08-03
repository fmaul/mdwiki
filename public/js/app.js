'use strict';

// Declare app level module which depends on filters, and services

angular.module('mdwiki', [
  'ngSanitize',
  'mdwiki.controllers',
  'mdwiki.filters',
  'mdwiki.services',
  'mdwiki.directives'
]).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
      templateUrl: './views/content.html',
      controller: 'ContentCtrl'
    }).when('/:page', {
      templateUrl: './views/content.html',
      controller: 'ContentCtrl'
    }).otherwise({
      redirectTo: '/index'
    });

  $locationProvider.html5Mode(false);
});