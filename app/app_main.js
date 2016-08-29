define([
  'angular',
  'api_constants',
  'require',

  //angular deps
  'oclazyload',
  'ui.router',
  'ui.bootstrap',
  'ngRoute',

  //application deps
  'view1/view1',
  'view2/view2',
  'components/version/version',
  'components/version/version-directive',
  'components/version/interpolate-filter'
  ], function(angular, API){

  var wesapplication = angular.module('wesapplication', [
    'ui.router',
    'ui.bootstrap',
    'ngRoute',
    'wesapplication.view1',
    'wesapplication.view2',
    'wesapplication.version'
  ]);


  //COFIG
  wesapplication.config([
    '$urlRouterProvider',
    '$httpProvider',
    '$ocLazyLoadProvider'
  , function($urlRouterProvider, $httpProvider, $ocLazyLoadProvider){


    /* ----------- SET BASE ROUTE */
      $urlRouterProvider.otherwise('/view1');

  }]);

  return wesapplication;
});
