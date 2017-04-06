//angular.module("app").controller("headerCtrl",function($scope,$rootScope){
//    $scope.cart=0;
//    $rootScope.$on("select-item",function(item){
//        $scope.cart++
//    });
//    
//})


angular.module("app").controller("headerCtrl",function($scope,$rootScope){
    $scope.cart=0;
    
    $rootScope.$on("selected-cart",function(){
        $scope.cart++
    });
});