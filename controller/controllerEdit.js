window.controllerEdit = function($scope, $http, $location , $routeParams){
    $scope.hi = "Dây là trang sửa";
    const apiUrl = "http://localhost:3000/foodsss";
    console.log($routeParams)
    $scope.getFood = function(id){
        $http.get(`${apiUrl}/${id}`).then(function(response){
            console.log(response);
            $scope.inputValue = {
                ma_sp: response.data.ma_sp,
                ten: response.data.ten,
                loai: response.data.loai,
                han_su_dung: response.data.han_su_dung,
                gia: response.data.gia,
            }
        })
    }
    if($routeParams.id){
        $scope.getFood($routeParams.id)
    }else{
        $location.path('/list-foods')
    }

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
            $http.put(`${apiUrl}/${$routeParams.id}`, items).then(function(response){
                if(response.status == 200){
                    $location.path('/list-foods')
                }
            })
        }
    }

}