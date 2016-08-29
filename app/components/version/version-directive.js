define(['angular'], function(angular) {
  'use strict';

  var version_directive = angular.module('wesapplication.version.version-directive', [])

      .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
          elm.text(version);
        };
      }]);

  return version_directive;
});
