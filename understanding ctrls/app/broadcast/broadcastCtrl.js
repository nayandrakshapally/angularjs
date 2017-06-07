angular.module("broadcast").controller("contentCtrl",function($scope,$rootScope){
    $scope.select=function(data){
        $rootScope.$broadcast("selected-cart");
    }
});

angular.module("broadcast").controller("headerCtrl",function($scope,$rootScope){
    $scope.cart=0;
    
    $rootScope.$on("selected-cart",function(){
        $scope.cart++
    });
});