(function(){
    var app=angular.module("app",[]);
    
    app.controller("mainCtrl",[mainCtrlFn]);
    function mainCtrlFn(){
        var vm=this;
        vm.navItems=[{"key":"home","value":"Home"},
                     {"key":"about","value":"About"}]
    }
})();