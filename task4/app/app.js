(function(){
angular.module("task4",["header","ui.router","crud","broadcast"]);



angular.module("task4")
    .config(["$stateProvider",function($stateProvider){
        
        var crudObj={
            url:'/',
            templateUrl: "app/crud/crud.html"
        }
        var broadcastObj={
            templateUrl: "app/broadcast/broadcast.html"
        }
       
        
 
    
        $stateProvider.state("crud",crudObj);
        $stateProvider.state("broadcast",broadcastObj);
       
    }]);
    


angular.module("task4")
.controller("mainCtrl",[mainCtrl])


function mainCtrl(){
    var vm=this;
    vm.headerTemplate="app/header/header.html"
}

})();