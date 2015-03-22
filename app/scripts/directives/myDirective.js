'use strict';

angular.module('cakerosterApp')
	.directive('myDirective', function() {
		return {
			restrict: 'A',
			replace: true,
			template: '<a href="{{myUrl}}">{{myLinkText}}</a>',
			scope: {
				myUrl: '@',
				myLinkText: '@'
			},
			controller: function($scope) {
				console.debug($scope);
			}
		};
	});