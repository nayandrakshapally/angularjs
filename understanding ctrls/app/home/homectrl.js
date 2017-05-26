(function(){


angular.module("home")
.controller("homectrl",["homesvc","$scope",homectrl]);

function homectrl(homesvc, $scope){
    var vm = this;
    vm.user = {};
    homesvc.getCountriesFromJson()
    
     .then(function (response) {
                    console.log(response);
                    vm.countries = response.data.countries;

                })

                .catch(function (response) {
                    console.log(response);
                })

                .finally(function (response) {
                    console.log(response);
                });
    
    homesvc.getDestinationFromJson()
        .then(function (response) {
                    console.log(response);
                    vm.destination = response.data.destination;

                })

                .catch(function (response) {
                    console.log(response);
                });
     homesvc.getDatesFromJson()
        .then(function (response) {
                    console.log(response);
                    vm.dates = response.data.dates;

                })

                .catch(function (response) {
                    console.log(response);
                });

    
    
     vm.i = 0;
    vm.j = 0;
    vm.k = 0;
  
  $scope.addDataAdult = function() {
    if(vm.i<10){
       vm.i++; 
    }
    
  };
    
     $scope.addDataChildren = function() {
        if(vm.j<10){
       vm.j++; 
    }

  };
    
     $scope.addDataPets = function() {
        if(vm.k<10){
       vm.k++; 
    }

  };
    
    
    $scope.deleteDataAdult = function() {
        if(vm.i>0){
           vm.i--; 
            
        }
    
  };
    
     $scope.deleteDataChildren = function() {
    if(vm.j>0){
           vm.j--; 
            
        }

  };
    
     $scope.deleteDataPets = function() {
        if(vm.k>0){
           vm.k--; 
            
        }
  };
    
    vm.fadeAnimation=true
    
    
    $scope.getDetails = function() {
        vm.fadeAnimation = !vm.fadeAnimation
    }
    
    
}
    
   

    


})();