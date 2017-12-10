'use strict';

/**
 * @ngdoc function
 * @name portfolioWebsiteDeveloperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioWebsiteDeveloperApp
 */
angular.module('app')
  .controller('MainCtrl', function () {
  	this.getClass = function (path) {
  		if (path == '#!/' || path == '#!') {
  			if ($location.path() == path)
  				return 'active';
  			else
  				return '';
  		}
  		return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  	};
  });
