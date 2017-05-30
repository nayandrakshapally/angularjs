(function(){
angular.module("task3",["header","home","aboutus","digitalmarketing","training","contactus","ui.router","pt"]);
 angular.module("task3")
    .config(["$stateProvider",function($stateProvider){
   
    var homeObj={
            // url:'/',
            templateUrl: "app/home/home.html"
        }
        var aboutusObj={
             templateUrl: "app/aboutus/aboutus.html"
         }
        
        var digitalmarketingObj={
            templateUrl: "app/digitalmarketing/digitalmarketing.html"
        }
         var developmentObj={
            templateUrl: "app/development/development.html"
        }
         
         var trainingObj={
            templateUrl: "app/training/training.html"
        }
         var contactusObj={
            templateUrl: "app/contactus/contactus.html"
        }
         var ptObj={
            templateUrl: "app/pt/pt.html"
        }
        
        var active={
             url: '{path:.*}',
             templateUrl: 'app/home/home.html'
        }
        
 
    
        $stateProvider.state("home",homeObj);
        $stateProvider.state("aboutus",aboutusObj);
        $stateProvider.state("digitalmarketing",digitalmarketingObj);
        $stateProvider.state("development",developmentObj);
        $stateProvider.state("training",trainingObj);
        $stateProvider.state("contactus",contactusObj);
         $stateProvider.state("pt",ptObj);
        
        
        $stateProvider.state('active', active);
        
    }]);


angular.module("task3")
.controller("mainCtrl",[mainCtrl]);


function mainCtrl(){
var vm=this;
vm.headerTemplate="app/header/header.html"

}


})();