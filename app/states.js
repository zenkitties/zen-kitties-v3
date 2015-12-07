(function(angular) {
    "use strict";

    var zenApp = angular.module('zenApp');

    zenApp.config(function($routeProvider) {
        
     $routeProvider
        .when('/', {
              URL: '#'     
              })
     
        .when('/about', {
               templateUrl: 'app/views/about-me.html'
               })
     
        .otherwise ({ redirectTo: '/' });
        
         })

})(window.angular);