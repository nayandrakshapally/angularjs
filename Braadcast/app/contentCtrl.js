angular.module("broadcast").controller("contentCtrl",function($scope,$rootScope){
    $scope.select=function(data){
        $rootScope.$broadcast("selected-cart");
    }
});