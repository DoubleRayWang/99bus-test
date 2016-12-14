/**
 * Created by hxsd on 2016/3/14.
 */
angular.module("myapp",["ionic"]);

angular.module("myapp").config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html"
    });

    $stateProvider.state("tabs",{
        url:"/tabs",
        templateUrl:"views/tabs/tabs.html"
    });
    $stateProvider.state("tabs.home",{
        url:"/home",
        views: {'home-tab':{templateUrl:"views/home/home.html"}}
    });
    $stateProvider.state("tabs.daibu",{
        url:"/daibu",
        views: {'home-tab':{templateUrl:"views/daibu/daibu.html",controller:"daibuController"}}
    });
    $stateProvider.state("tabs.daibu2",{
        url:"/daibu2",
        views: {'home-tab':{templateUrl:"views/daibu/daibu2.html",controller:"daibuController"}}
    });
    $stateProvider.state("tabs.daibu3",{
        url:"/daibu3",
        views: {'home-tab':{templateUrl:"views/daibu/daibu3.html",controller:"daibuController"}}
    });
    $stateProvider.state("tabs.FlyLifechina",{
        url:"/FlyLifechina",
        views: {'FlyLifechina-tab':{templateUrl:"views/FlyLifechina/FlyLifechina.html",controller:"FlyLifechinaController"}}
    });
    $stateProvider.state("tabs.bmw",{
        url:"/bmw",
        views: {'FlyLifechina-tab':{templateUrl:"views/bmw/bmw.html",controller:"bmwController"}}
    });
    $stateProvider.state("tabs.details",{
        url:"/details",
        views: {'mine-tab':{templateUrl:"views/details/details.html",controller:"detailsController"}}
    });
    $stateProvider.state("tabs.detail1",{
        url:"/detail1",
        views: {'FlyLifechina-tab':{templateUrl:"views/details/details.html",controller:"detailsController"}}
    });
    $stateProvider.state("tabs.contact",{
        url:"/contact",
        views: {'mine-tab':{templateUrl:"views/contact/contact.html"}}
    });
    $stateProvider.state("tabs.questions",{
        url:"/questions",
        views: {'questions-tab':{templateUrl:"views/questions/questions.html",controller:"questionsController"}}
    });
    $stateProvider.state("tabs.quiz",{
        url:"/quiz",
        views: {'questions-tab':{templateUrl:"views/quiz/quiz.html"}}
    });
    $stateProvider.state("tabs.quiz1",{
        url:"/quiz1",
        views: {'mine-tab':{templateUrl:"views/quiz/quiz1.html"}}
    });
    $stateProvider.state("tabs.login",{
        url:"/login",
        views: {'mine-tab':{templateUrl:"views/login/login.html"}}
    });
    $stateProvider.state("tabs.regard",{
        url:"/regard",
        views: {'mine-tab':{templateUrl:"views/regard/regard.html"}}
    });
    $stateProvider.state("tabs.opinion",{
        url:"/opinion",
        views: {'mine-tab':{templateUrl:"views/opinion/opinion.html"}}
    });
    $stateProvider.state("tabs.share",{
        url:"/share",
        views: {'mine-tab':{templateUrl:"views/share/share.html"}}
    });
    $stateProvider.state("tabs.mine",{
        url:"/mine",
        views: {'mine-tab':{templateUrl:"views/mine/mine.html",controller:"mineController"}}
    });
    $stateProvider.state("tabs.activity",{
        url:"/activity",
        views: {'activity-tab':{templateUrl:"views/activity/activity.html"}}
    });
    $urlRouterProvider.otherwise("/tour");
});
