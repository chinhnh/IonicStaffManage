// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers' , 'starter.services'])

.run(function($ionicPlatform , $rootScope, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

     $rootScope.authStatus = false;
	 //stateChange event
	  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
		  $rootScope.authStatus = toState.authStatus;
		  if($rootScope.authStatus){
			  
			
		  }
    });

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		console.log("URL : "+toState.url);
		if(toState.url=='/home'){
			console.log("match : "+toState.url);
			$timeout(function(){
				angular.element(document.querySelector('#leftMenu' )).removeClass("hide");
			},1000);
		}	
	});

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

//--------------------------------------

 .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    },
	authStatus: false
  })
 .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
      }
   },
	authStatus: false
  })
//--------------------------------------


  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
      }
     },
	 authStatus: true
  })

.state('app.homedetail',{
 url: '/homedetail/:id',
views:{
  'menuContent':{
    templateUrl:'templates/home-detail.html',
    controller:'HomeDetailCtrl'
  }
}
})

    .state('app.listns', {
      url: '/listns',
      views: {
        'menuContent': {
          templateUrl: 'templates/nhansu.html',
          controller: 'ListnsCtrl'
        }
      }
    })

  .state('app.detailns', {
    url: '/detailns/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/nhansu_detail.html',
        controller: 'DetailnsCtrl'
      }
    }
  })
  .state('app.phongban',{
    url:'/phongban',
    views:{
     'menuContent':{
      templateUrl:'templates/phongban.html',
      controller:'PhongbanCtrl'
     }
    }
  })
   .state('app.phongbandetail',{
    url:'/phongbandetail/:id',
    views:{
      'menuContent':{
        templateUrl:'templates/phongban-detail.html',
        controller:'PhongbanDetailCtrl'
      }
    }
  })
  .state('app.chucvudetail',{
    url:'/chucvudetail/:id',
    views:{
      'menuContent':{
        templateUrl:'templates/chucvu-detail.html',
        controller:'ChucvuDetailCtrl'
      }
    }
  })
   .state('app.chucvu',{
    url:'/chucvu',
    views:{
     'menuContent':{
      templateUrl:'templates/chucvu.html',
      controller:'ChucvuCtrl'
     }
    }
  })
      .state('app.detail',{
    url:'/detail/:id',
    views:{
     'menuContent':{
      templateUrl:'templates/detail.html',
      controller:'DetailCtrl'
     }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
