(function(){
    function registerSvc($http){

        this.getCountriesFromJson=function(){
           return $http.get("api/countries.json");
        };
    }
    angular.module("register")
    .service("registerSvc",["$http",registerSvc]);
})();