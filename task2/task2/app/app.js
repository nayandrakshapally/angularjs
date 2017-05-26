(function(){
    angular.module("task2",["home"]);

    angular.module("task2")
    .controller("mainCtrl",[mainCtrl]);


    function mainCtrl(){
var vm=this;
vm.homeTemplate="app/home/home.html";
    }
})();