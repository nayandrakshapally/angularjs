(function () {
    function commentsCtrl(commentsSvc) {
        var vm = this;
        commentsSvc.getcommentsfromjson()

     .then(function(response){
        console.log(response);
     
       vm.comments=response.data.comments;
       })

     .catch(function(response){
        console.log(response);
     })

     .finally(function(response){
        console.log(response);

     })


    }
    angular.module("comments")
        .controller("commentsCtrl", ["commentsSvc",commentsCtrl]);

})();