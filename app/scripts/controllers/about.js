'use strict';

/**
 * @ngdoc function
 * @name cakerosterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cakerosterApp
 */
angular.module('cakerosterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
