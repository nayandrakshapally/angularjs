(function () {
    function headerCtrl($state) {

        
        var vm = this;

        //TODO: Move navItems to service in future.
        vm.navItems = [
            { "key": "home", "value": "Home" },
            { "key": "products", "value": "Products" },
            
            { "key": "register", "value": "Register" },
            { "key": "login", "value": "Login" },
            { "key": "posts", "value":"Posts"}
        ];

        vm.changeState=function(data){
            console.log(data);
            $state.go(data);
        }
    }

    angular.module("header")
        .controller("headerCtrl", ["$state",headerCtrl])
})();