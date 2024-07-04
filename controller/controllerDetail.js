window.controllerDetail = function($scope, $http, $location , $routeParams){
    $scope.hi = "Dây là trang Chi Tiết";
    const apiUrl = "http://localhost:3000/foodsss";
    $http.get(`${apiUrl}/${$routeParams.id}`).then(function(response){
        console.log(response);
        $scope.foodsss = response.data;
    })
}