(function(){
    angular.module("header",[]);
    
    angular.module("header").controller("headerCtrl",[headerCtrlFn]);
    
    function headerCtrlFn(){
        var vm = this;
        vm.headerTemplate = "app/header/header.html";
    }
})();