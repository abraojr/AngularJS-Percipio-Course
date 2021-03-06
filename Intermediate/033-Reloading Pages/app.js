"use strict";

angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/welcome', {
            templateUrl: './views/welcome.html',
            controller: 'WelcomeController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/welcome'
        });
}]);


angular.module('myApp').controller('WelcomeController', ['$route', function ($route) {

    this.details = 'Hello, from WelcomeController.';

    this.reload = function () {
        $route.reload('/welcome');
    }
}]);