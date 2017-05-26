(function () {
    function headerCtrl($state,$scope) {

        
        var vm=this;
        vm.cart=0;
        vm.brandName="BitBloggerApp";

        $scope.$on("add-data",function(item){
            vm.cart++;
        });
        vm.navItems = [
            { "key": "home", "value": "Home" },
            { "key": "products", "value": "Products" },
            
            { "key": "register", "value": "Register" },
            { "key": "login", "value": "Login" },
            { "key": "posts", "value":"Posts"}
        ];

        vm.changeState=function(data){
            $state.go(data);
            console.log(data);
        }
    }

    angular.module("header")
        .controller("headerCtrl", ["$state","$scope",headerCtrl])
})();