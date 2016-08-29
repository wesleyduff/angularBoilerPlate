define([
    angular /*global angular */
    ], 
    function(angular){
    
    'use strict';
    
    angular.module('test_module', [{
        deps : [
            'build/module_combined.js'
            ]
    }]);
    
})