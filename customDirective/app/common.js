(function(){
    angular.module("common",[]);
   /* companyname is used in header.html so we have to use this controller in
        header.html*/
    angular.module("common").controller("commonCtrl",[commonCtrlFn]);
    function commonCtrlFn(){
        var vm = this;            
        vm.companyName = "k3";     
    }
    
    angular.module("common").directive("brandName",[brandNameFn]);
    function brandNameFn(){
        return{
           /* template:"{{cc.companyName}}"*/
             template:'<a class="navbar-brand" href="#">{{cc.companyName}}</a>'
        }
    }
    
     angular.module("common").directive("brandName1",[brandNameFn1]);
    function brandNameFn1(){
        return{
           
            templateUrl:'app/header/header.html'
        }
    }
    
     angular.module("common").directive("numbersOnly",[numbersOnlyFn]);
    function numbersOnlyFn(){
        return{
           restrict:"A",
            link:function(scope,element,attr){
                console.log(scope);
                console.log(element);
                console.log(attr);
                
                var maxlength = attr["maxlength"]
                
                element.bind("keypress",function(e){
                    console.log(e.keyCode);
                    var selectedKey = e.key;
                    var reg = new RegExp('^[0-9]$');
                    console.log(reg.test(selectedKey));
                    if(!reg.test(selectedKey) && maxlength ){
                        e.preventDefault();
                    }
                })
            }
           
        }
    }
})();