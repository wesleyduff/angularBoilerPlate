
define('module-controllers.js',[
    angular /* global angular */
    ],
    function(){
        
        
        
        var Controllers = {
            MainController : function($scope){
                
            }
        }
        
        return Controllers;
        
});
;
define("module-factories.js", function(){});

define('module-module',[
    angular, /*global angular */
    './module-controllers.js',
    './module-factories.js'
    ], 
    function(angular){
    
    
    
    angular.module('test_module')
    .controller(['$scope', Controllers.MainController]); /*global Controllers*/
    
});