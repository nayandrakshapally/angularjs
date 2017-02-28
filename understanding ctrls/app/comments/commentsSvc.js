(function () {
    function commentsSvc($http) {
       this.getcommentsfromjson =function(){


         return $http.get("api/comments.json");
       }
   };
     angular.module("comments")
        .service("commentsSvc", ["$http",commentsSvc]);
})();