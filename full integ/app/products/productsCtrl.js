(function(){

    angular.module("products")
        .controller("productsCtrl",["productFac","$rootScope","$scope",productsCtrl]);


    function productsCtrl(productFac,$rootScope,$scope) {
        var vm = this;
        $scope.numberOfProducts = 5;
        $scope.priceCriteria == "Price";


        productFac.getProducts()
            .then(function (response) {
                vm.products = response;

            })

            .catch(function (response) {

            });


        $scope.addData = function (item) {
            $rootScope.$broadcast("add-data");
        };
        $scope.showMore = function () {
            $scope.numberOfProducts += 5;

        };
        $scope.sortByPrice = function () {

              if ($scope.priceCriteria == "Price") {
             $scope.priceCriteria = "-Price";
             }
             else {
             $scope.priceCriteria = "Price";
             }
             };


        }

    })();
