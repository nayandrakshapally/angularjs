angular.module("common",[]);

angular.module("common")
.directive("customBrand",[customBrand])
.directive("customNavBar",[customNavBar])
/*.directive("customDatePicker",[customDatePicker]);*/


function customBrand() {

    return {
        template:'<a class="navbar-brand" href="#">{{hc.brandName}}</a>'
    };

}function customNavBar() {

    return{
        templateUrl:'app/header/header.tpl.html',
        restrict: "A"
    };
}
/*
function customDatePicker(){

    return{
        restrict:"A",
        link:function(scope,attrs,element){

            attrs.datePicker();
        }

    };
}*/
