(function () {

  //module creation.
  angular.module("bitblogger",
    ["register", "login", "header","comments","posts","products","common","ui.router"]);

  //consuming the module
  angular.module("bitblogger")

    .config(["$stateProvider","versionProvider",function ($stateProvider,versionProvider) {

   //providers
        console.log(versionProvider.$get());

         var registerObj={
              templateUrl : "app/register/register.tpl.html",
              controller : "registerCtrl  as rc"

          };

          var postsObj={
              templateUrl : "app/posts/posts.tpl.html",
              controller : "postsCtrl as pc",
              params:{userInfo:null}
          };

          var productsObj={
              templateUrl : "app/products/products.tpl.html",
              controller : "productsCtrl  as prc"

          };

          $stateProvider.state("register",registerObj);


          $stateProvider.state("posts",postsObj);
          $stateProvider.state("products",productsObj);
    }]);



  angular.module("bitblogger")
    .controller("mainCtrl", [mainCtrlFn]);

  function mainCtrlFn() {
      var vm = this;
      vm.headerTemplate = "app/header/header.tpl.html";
      vm.commentsTemplate = "app/comments/comments.tpl.html";
      vm.registerTemplate = "app/register/register.tpl.html";
      vm.appName = "BitBlogger";
  }

})();
//providers//
(function(){
    angular.module("bitblogger")
        .provider("version",[versionProvider]);

    function versionProvider() {
        var buildNumber = "1.0";
        this.$get = function () {
            return buildNumber;

        }
    }

})();