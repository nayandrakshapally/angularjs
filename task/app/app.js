(function(){
    angular.module("task", ["header","ui.router","news","entertainment","signup","login"]);
    angular.module("task")
    .config(["$stateProvider",function($stateProvider){
        
        var newsObj={
            url:'/',
            templateUrl: "news/news.html"
        }
        var entertainmentObj={
            templateUrl: "entertainment/entertainment.html"
        }
        var loginObj={
            templateUrl: "login/login.html"
        }
        var signupObj={
            templateUrl: "signup/signup.html"
        }
        
        var home={
             url: '{path:.*}',
             templateUrl: 'news/news.html'
        }
        
 
    
        $stateProvider.state("news",newsObj);
        $stateProvider.state("entertainment",entertainmentObj);
        $stateProvider.state("login",loginObj);
        $stateProvider.state("signup",signupObj);
        $stateProvider.state('home', home);
        
    }]);
    
    
    
    angular.module("task")
    .controller("mainCtrl", [mainCtrlFn]);
    
    
    function mainCtrlFn() {
        var vm = this;
        
        vm.headerTemplate = "header/header.html";
    }
    
})();