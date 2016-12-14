/**
 * Created by Administrator on 2016/3/20.
 */
angular.module("myapp").controller("detailsController",function($scope,$http){
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
    $scope.loadMore();

});