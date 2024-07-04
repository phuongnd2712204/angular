window.controllerAdd = function($scope, $http, $location){
    $scope.hi = "Dây là Thêm";
    const apiUrl = "http://localhost:3000/foodsss";

    $scope.checkDl = {
        ma_sp: false,
        ten: false,
        loai: false,
        han_su_dung: false,
        gia: false,
    }
    $scope.submit = function(){
        console.log($scope.inputValue);
        let flag = false;

        if(!$scope.inputValue || !$scope.inputValue.ma_sp){
            $scope.checkDl.ma_sp = true;
            flag = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.ten){
            $scope.checkDl.ten = true;
            flag = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.loai){
            $scope.checkDl.loai = true;
            flag = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.han_su_dung){
            $scope.checkDl.han_su_dung = true;
            flag = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.gia){
            $scope.checkDl.gia = true;
            flag = true;
        }
        
        if(flag == false){
            let items = {
                ...$scope.inputValue,
            }
            $http.post(apiUrl, items).then(function(response){
                if(response.status == 201){
                    $location.path('/list-foods')
                }
            })
        }
    }
}