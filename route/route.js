angular.module('myApp',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/list-foods',{
        templateUrl: 'views/list.html',
        controller: controllerList,
    })
    .when('/foods/add',{
        templateUrl: 'views/add.html',
        controller: controllerAdd,
    })
    .when('/foods/edit:id',{
        templateUrl: 'views/edit.html',
        controller: controllerEdit,
    })
    .when('/foods/detail:id',{
        templateUrl: 'views/detail.html',
        controller: controllerDetail,
    })
})