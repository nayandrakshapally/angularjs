(function(){

    //module creation.
    angular.module("header",[]);

    //consuming the module
    angular.module("header")
    .config([function(){
        console.log("Config : header");
    }]);
})();