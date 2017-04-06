(function(){
    angular.module("products")
        .service("productsSvc",["$http","$q",productsSvc]);

    function productsSvc($http,$q) {
        this.getProducts = function () {
            var dfd = $q.defer();
            $http.get("api/products.json")
                .then(function (response) {
                    dfd.resolve(response.data.products);
                })
                .catch(function (response) {
                    dfd.reject({message: "Error"});
                });
            return dfd.promise;
        };
    }
//using factory//
})();
(function () {
    angular.module("products")
        .factory("productFac",["$http","$q",productFac]);

    function productFac($http,$q) {
        return{
           getProducts : function () {
            var dfd = $q.defer();
            $http.get("api/products.json")
                .then(function (response) {
                    dfd.resolve(response.data.products);
                })
                .catch(function (response) {
                    dfd.reject({message: "Error"});
                });
            return dfd.promise;
        }
        }
    }

})();