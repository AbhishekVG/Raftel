/**
 * Created with JetBrains WebStorm.
 * User: VAbhishek
 * Date: 10/21/16
 * Time: 4:29 PM
 * To change this template use File | Settings | File Templates.
 */
var myApp=angular.module("Module",[]);
myApp.controller("myController",['$scope','$location',function(a,b){

              a.submit=function(){

                  b.path("/two");
              };
}]);