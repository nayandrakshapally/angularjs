(function(){
angular.module("bitblogger",["login","register","header"]);
angular.module("bitblogger")
.config([function(){

	console.log("config : bitblogger");
}]);

angular.module("bitblogger")
.controller("mainctrl",[mainctrl]);


function mainctrl(){


	var vm=this;
	vm.headertemplate="app/header/header.html";
	vm.appname="bitblogger";
     vm.show=false;
     
	vm.showAppName = function(){
		vm.show=true;
	}

	vm.hideAppName =function(){
		vm.show=false;
	}
	
}
})();