define(['angular'], function(angular){
  'use strict';

 var interpolate_filter =  angular.module('wesapplication.version.interpolate-filter', [])

      .filter('interpolate', ['version', function(version) {
        return function(text) {
          return String(text).replace(/\%VERSION\%/mg, version);
        };
      }]);

  return interpolate_filter;

});

