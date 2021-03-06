"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstVehicleView', function () {

    return {
        scope: {
            item: '='
        },
        replace: true,
        templateUrl: './templates/vehicle.html',
        restrict: 'E'
    };

});

angular.module('myApp').controller('MainController', ['$scope', function ($scope) {

    $scope.firstItem = {
        year: 2012,
        make: 'Mazda',
        model: '6',
        price: 18999
    };

    $scope.secondItem = {
        year: 2015,
        make: 'Lexus',
        model: 'IS 250',
        price: 39650
    };
}]);