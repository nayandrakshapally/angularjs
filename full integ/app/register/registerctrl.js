(function () {

    function registerCtrl(registerSvc,$state) {
        var vm = this;
        vm.user={};
        vm.nextPage= function() {
            $state.go("posts");
        };
            registerSvc.getCountriesFromJson()


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

        }




    angular.module("register")
        .controller("registerCtrl", ["registerSvc","$state", registerCtrl]);

})();
