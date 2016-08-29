define([
    angular, /*global angular */
    './module-controllers.js',
    './module-factories.js'
    ], 
    function(angular){
    
    'use strict';
    
    angular.module('test_module')
    .controller('MainController', ['$scope', Controllers.MainController]); /*global Controllers*/
    
})