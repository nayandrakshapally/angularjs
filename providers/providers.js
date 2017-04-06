(function(){
    angular.module("providers",[]);
    
    angular.module("providers")
    .config(["versionFn",
      function (versionFn) {
//       .config(["version",function(version){
           console.log("hi");
//        
//       console.log(versionFn.$get());
           
               }]);
    
   function versionFn(){
       var num = "1.0";
    
        this.$get = function(){
            return num;
        };

   }
//                
    angular.module("providers")
            .provider("version",[versionFn]);
})();


  
 

