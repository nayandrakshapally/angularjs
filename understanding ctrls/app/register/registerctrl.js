(function () {

    function registerCtrl(registerSvc) {
        var vm = this;
        
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
        .controller("registerCtrl", ["registerSvc", registerCtrl]);

})();