'use strict';

describe('Controller: WorkProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioWebsiteDeveloperApp'));

  var WorkProjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkProjectsCtrl = $controller('WorkProjectsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorkProjectsCtrl.awesomeThings.length).toBe(3);
  });
});
