//angular.module("app").controller("contentCtrl",function($scope,$rootScope){
//    $scope.add=function(item){
//        $rootScope.$broadcast("select-item");
//    }
//});

angular.module("app").controller("contentCtrl",function($scope,$rootScope){
    $scope.select=function(data){
        $rootScope.$broadcast("selected-cart");
    }
});