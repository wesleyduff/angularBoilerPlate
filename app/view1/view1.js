define([
    'angular',
    '../api_constants',
    'oclazyload',
    'ui.router',
    'ngRoute'
],
    function(angular, API) {
  'use strict';

  var view1 = angular.module('wesapplication.view1', ['ui.router', 'oc.lazyLoad'])

    .config(
        [
            '$stateProvider',
            '$ocLazyLoadProvider',
        function ($stateProvider, $ocLazyLoadProvider) {

            $stateProvider

                .state('view1',
                    {
                        url: '/view1',
                        templateUrl: 'view1/view1.html',
                        controller: 'View1Ctrl'
                    })

        }])

    .controller('View1Ctrl', [function () {

    }]);

  return view1;
});
