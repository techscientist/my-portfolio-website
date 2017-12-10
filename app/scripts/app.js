'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    "pathgather.popeye"
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/aboutme', {
        templateUrl: 'views/aboutme.html',
        controller: 'AboutmeCtrl',
        controllerAs: 'aboutme'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl',
        controllerAs: 'work'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl',
        controllerAs: 'skills'
      })
      .when('/awards', {
        templateUrl: 'views/awards.html',
        controller: 'AwardsCtrl',
        controllerAs: 'awards'
      })
      .when('/work/projects', {
        templateUrl: 'views/work/projects.html',
        controller: 'WorkProjectsCtrl',
        controllerAs: 'work/projects'
      })
      .when('/work/leadership', {
        templateUrl: 'views/work/leadership.html',
        controller: 'WorkLeadershipCtrl',
        controllerAs: 'work/leadership'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
