window.controllerList = function($scope, $http, $location){
    $scope.hi = "Dây là danh sách";
    const apiUrl = "http://localhost:3000/foodsss";

    $scope.listfood = function(){
        $http.get(apiUrl).then(function(response){
            console.log(response);
            $scope.foodsss = response.data;
        });
    }
    $scope.listfood();
    $scope.deleteFood = function(id){
        let cf = confirm("Bạn có muốn xoá không");
        if(cf){
            $http.delete(apiUrl+"/"+id).then(function(response){
                alert("Xoá thành công");
                $scope.listfood();
            })
        }
    }
    $scope.edit = function(id){
        $location.path(`/foods/edit${id}`);
    }
    $scope.view = function(id){
        $location.path(`/foods/detail${id}`);
    }
}