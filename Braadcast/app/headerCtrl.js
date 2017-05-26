angular.module("broadcast").controller("headerCtrl",function($scope,$rootScope){
    $scope.cart=0;
    
    $rootScope.$on("selected-cart",function(){
        $scope.cart++
    });
});