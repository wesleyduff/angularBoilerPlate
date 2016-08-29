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

      $ocLazyLoadProvider.config({
        asyncLoader: require
      });

      $stateProvider

        .state('test',
            {
                url: '/test',
                views: {
                  'testSection' : {
                    templateUrl: 'app_modules/test_module/template.html',
                    controller: 'MainController'
                  }
                },
                resolve: {
                  loadDeps : ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load({
                      files: [
                        './app_modules/test_module/main.js',
                        './app_modules/test_module/template.html'
                      ]
                    });
                  }]
                }
            }
        );


  }]);

  return wesapplication;
});
