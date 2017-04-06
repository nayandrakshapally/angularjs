(function(){
    var app=angular.module("app",[]);
    
    app.controller("mainCtrl",["mainSvc",mainCtrlFn]);
    function mainCtrlFn(mainSvc){
        var vm=this;
        vm.navItems=[{"key":"home","value":"Home"},
                     {"key":"login","value":"Login"}];
        
        
        mainSvc.getCountries()
            .then(function(res){
            console.log(res);
            vm.countries=res.data.countries;
        })
        
        
    }
    
    
    app.service("mainSvc",["$http",mainSvcFn]);
    function mainSvcFn($http){
        var vm=this;
        vm.getCountries=function(){
         return $http.get("api/countries.json")
        }
    }
    
 
})();