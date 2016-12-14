/**
 * Created by hxsd on 2016/3/16.
 */
angular.module("myapp").controller("questionsController",function($scope,$http){
    $scope.questions = [];
    var url="question.json";
    $scope.loadMore=function(){
        $http.get(url).success(function(data){
            //  $scope.restaurants=restaurants.restaurants
            Array.prototype.push.apply($scope.questions,data)
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