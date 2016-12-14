/**
 * Created by Administrator on 2016/3/21.
 */
angular.module("myapp").controller("daibuController",function($scope,$http){
    $scope.FlyLifechinas = [];
    var url="FlyLifechinas.json";
    $scope.loadMore=function(){
        $http.get(url).success(function(data){
            //  $scope.restaurants=restaurants.restaurants
            Array.prototype.push.apply($scope.FlyLifechinas,data)
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    };
    $scope.load =function(){
        $http.get(url).finally(function(){
            $scope.$broadcast("scroll.refreshComplete")
        })
    };
    $scope.loadMore();

});