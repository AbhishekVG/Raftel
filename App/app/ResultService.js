/*
 * Created with JetBrains WebStorm.
 * User: VAbhishek
 * Date: 10/21/16
 * Time: 4:15 PM
 * To change this template use File | Settings | File Templates.
 */
var myApp=angular.module("myModule",['ngRoute','Module']);
myApp.config(function($routeProvider){
    $routeProvider
                .when('/',
        {templateUrl:'1stPage/view/One.html',
            controller:'myController'
        })
                .when('/two',
        {templateUrl:'2ndPage/view/Two.html'}) ;
});