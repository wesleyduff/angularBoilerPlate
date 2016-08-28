define(['angular'], function(angular) {
  'use strict';

  angular.module('wesapplication.version', [
        'wesapplication.version.interpolate-filter',
        'wesapplication.version.version-directive'
      ])

      .value('version', '0.1');

});
