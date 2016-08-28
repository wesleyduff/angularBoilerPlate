define(['angular'], function(angular){
  'use strict';

  angular.module('wesapplication.version.interpolate-filter', [])

      .filter('interpolate', ['version', function(version) {
        return function(text) {
          return String(text).replace(/\%VERSION\%/mg, version);
        };
      }]);
})

