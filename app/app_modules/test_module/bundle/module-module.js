define([
    angular, /*global angular */
    './build/module_combined.min'
    ], 
    function(angular){
    
    'use strict';
    
    angular.module('test_module')
    .controller(['$scope', Controllers.MainController]); /*global Controllers*/
    
})