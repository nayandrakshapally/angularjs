(function(){
    angular.module("products",[]);
    
    //controller
    function productsCtrlFn($scope,productsFac){
        productsFactory.productsFac()
          .then(function(response){
            $scope.products = response.data.products;
        })
          .catch(function(response){
            console.log("error")
        });
          
    }
    
    angular.module("products").controller("productsCtrl",["$scope","productsFac",productsCtrlFn]);
    
    
    //factories
    function productsFacFn($http){
        return{
            productsFac:function(){
                return $http.get("products.json");
            }
        }
    }
    
    angular.module("products").factory("productsFactory",["$http",productsFacFn]);
    
    
})();

/*factory is similar to service beut factory returns an object.after creating factory that should be injected to controller same as service.*/

/*products.json data is received by factory and data will be send to controller . from the controller data is displayes in view(i.e html).*/

