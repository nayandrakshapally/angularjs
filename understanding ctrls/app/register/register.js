(function(){

    //module creation.
    angular.module("register",[]);

    //consuming the module
    angular.module("register")
    .config([function(){
        console.log("Config : register");
    }]);
})();