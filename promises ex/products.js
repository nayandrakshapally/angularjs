(function(){
    angular.module("products",[]);
    
    function productCtrlFn(productSvc){
        console.log("loading products....");
        var vm = this ;
        productSvc.getProducts() 
          .then(function(response){
            vm.products = response;
            console.log(vm.products);
        })
          .catch(function(response){
            console.log("error..");
        });
    }
    
    function productSvcFn($http,$q){
        this.getProducts = function(){
            var dfd = $q.defer();
             $http.get("products.json")
               .then(function(response){ //response is userdefined keyword which consists of products data 
                 dfd.resolve(response.data.products); 
             })
               .catch(function(response){
                 dfd.reject("error occured");

             });
            return dfd.promise;
        }
    }
    
    angular.module("products")
      .controller("productCtrl",["productSvc",productCtrlFn]);
    
    angular.module("products")
      .service("productSvc",["$http","$q",productSvcFn]);
})();

// resolve , reject and promise are properties offered by defer object.
// if the reponse is positive resolve function works and if the response is negative reject function works.









