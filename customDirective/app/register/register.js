(function(){
    angular.module("register",[]);
    
    angular.module("register").controller("registerCtrl",[registerCtrlFn]);
    function registerCtrlFn(){
        var vm =  this;
        vm.registerTemplate = "app/register/register.html";
    }
})();