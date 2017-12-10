'use strict';

/**
 * @ngdoc function
 * @name portfolioWebsiteDeveloperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioWebsiteDeveloperApp
 */
angular.module('app')
  .controller('MainCtrl', function ($location) {
  	this.getClass = function (path) {
  		return path === $location.path();
  	};
  });
