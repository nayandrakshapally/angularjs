(function(){
    var app=angular.module("app",["ui.router"]);
    
    app.controller("mainCtrl",[mainCtrlFn]);
    function mainCtrlFn(){
        var vm=this;
        vm.navItems=[{"key":"home","value":"Home"},
                     {"key":"login","value":"Login"}]
    }
    
    app.config(["$stateProvider",function($stateProvider){
        $stateProvider.state("home",{
//            template:"hi",
            templateUrl:"home.html"
                    
        })
        .state("login",{
//            template:"hi",
            templateUrl:"login.html"
            
        })
        
       
    }]);
})();