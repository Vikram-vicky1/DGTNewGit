var app = angular.module("myApp", ['ngRoute']);

app.directive('navBar', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/nav/nav.html',
    };
});

app.directive('footerFile', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/footer/footer.html'
    };
});


app.controller("bodyController", ["$scope", '$route', '$routeParams', '$location', function ($scope, $route, $routeParams, $location) { 
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;


}])

app.controller("serviceController", ["$scope",'$routeParams', function ($scope, $routeParams) { 

    $scope.name = 'serviceController';
    $scope.params = $routeParams;

}])

app.controller("productsController", ["$scope",'$routeParams', function ($scope, $routeParams) { 

    $scope.name = 'productsController';
    $scope.params = $routeParams;


}])