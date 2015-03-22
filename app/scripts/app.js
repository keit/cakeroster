'use strict';

/**
 * @ngdoc overview
 * @name cakerosterApp
 * @description
 * # cakerosterApp
 *
 * Main module of the application.
 */
angular
  .module('cakerosterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.router',
	'ui.bootstrap'  
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/main');
	
	$stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    });
  });
