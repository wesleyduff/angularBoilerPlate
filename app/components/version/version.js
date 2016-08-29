define(['angular'], function(angular) {
  'use strict';

  var version = angular.module('wesapplication.version', [
        'wesapplication.version.interpolate-filter',
        'wesapplication.version.version-directive'
      ])

      .value('version', '0.1');

  return version;

});
