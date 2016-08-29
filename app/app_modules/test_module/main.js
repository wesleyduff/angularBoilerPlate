var APP_GLOBALS = APP_GLOBALS || {};
(function(angular, APP_GLOBALS){

  'use strict';

  angular.module('test_module', [[
      //'./app/app_modules/test_module/build/module_combined.js'
    './app_modules/test_module/bundle/module-controllers.js',
    './app_modules/test_module/bundle/module-module.js'
    ]]
  );

})(angular, APP_GLOBALS);
