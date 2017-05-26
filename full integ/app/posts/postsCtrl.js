(function () {
    function postsCtrl(postsSvc) {
        var vm = this;
        postsSvc.getPosts()
            .then(function (response) {
                vm.posts = response.data.posts;
            })
            .catch(function (error) {

            });

    }
    angular.module("posts").controller("postsCtrl", ["postsSvc", postsCtrl]);
})();