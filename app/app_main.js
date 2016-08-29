define([
  'angular',
  'api_constants',
  'require',

  //angular deps
  'oclazyload',
  'ui.router',
  'ui.bootstrap',

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
    'wesapplication.view1',
    'wesapplication.view2',
    'wesapplication.version'
  ]);


  //COFIG
  wesapplication.config([
    '$urlRouterProvider',
    '$httpProvider',
    '$ocLazyLoadProvider',
    '$stateProvider'
  , function($urlRouterProvider, $httpProvider, $ocLazyLoadProvider, $stateProvider){


    /* ----------- SET BASE ROUTE */
      $urlRouterProvider.otherwise('/view1');
      
      $stateProvider

        .state('test',
            {
                url: '/test',
                templateUrl: '/template.html',
                controller: 'MainController',
                resolve: {
                  loadDeps : ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load('./app_modules/test_module/main.js');
                  }]
                }
            }
        );


  }]);

  return wesapplication;
});
