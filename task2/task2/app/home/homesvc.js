(function(){
 angular.module("home")
    .service("homesvc",["$http", homesvc]);


    function homesvc($http){
        this.getCountriesFromJson=function(){
           return $http.get("api/countries.json");
        };
        
         this.getDestinationFromJson=function(){
           return $http.get("api/destination.json");
            
        };
         this.getDatesFromJson=function(){
           return $http.get("api/dates.json");
    }
    }
})();