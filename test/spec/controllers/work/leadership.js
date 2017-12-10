'use strict';

describe('Controller: WorkLeadershipCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioWebsiteDeveloperApp'));

  var WorkLeadershipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkLeadershipCtrl = $controller('WorkLeadershipCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorkLeadershipCtrl.awesomeThings.length).toBe(3);
  });
});
