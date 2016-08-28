define([
    'angular',
    '../api_constants',
    'oclazyload',
    'ui.router'
], function(angular, API) {

  'use strict';

  var view2 = angular.module('wesapplication.view2', ['ui.router', 'oc.lazyLoad'])

      .config(
          ['$stateProvider', '$ocLazyLoadProvider',
              function ($stateProvider, $ocLazyLoadProvider) {
              $stateProvider
                  .state('view2', {
                      url: '/view2',
                      templateUrl: 'view2/view2.html',
                      controller: 'View2Ctrl'
                  });
              }])

    .controller('View2Ctrl', [function () {

    }]);

  return view2;
});
