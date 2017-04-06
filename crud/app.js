
var app = angular.module('myApp',[])

.controller('ContactController',function ContactController($scope) {


    $scope.contacts = [
        {id:0, 'name': 'PremAseem', 'email':'hello@gmail.com', 'phone': '123-2343-44'}
    ];

    $scope.saveContact = function() {

        $scope.contacts.push($scope.newcontact);
        $scope.newcontact = {};
    }

     $scope.reset = function() {

       $scope.contacts.push($scope.newcontact);
        $scope.newcontact = {};
    }

    

    $scope.delete = function(id) {

        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.contacts.splice(i,1);
                $scope.newcontact = {};
            }
        }

    }


    $scope.edit = function(id) {
        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.newcontact = angular.copy($scope.contacts[i]);
            }
        }
    }
})