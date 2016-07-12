angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,  $location, $ionicPopup) {
  $scope.loginData = {};

  //--------------------------------------------
   $scope.login = function(user) {
			
		if(typeof(user)=='undefined'){
			$scope.showAlert('Please fill username and password to proceed.');	
			return false;
		}

		if(user.username=='demo@gmail.com' && user.password=='demo'){
			$location.path('/app/dashboard');
		}else{
			$scope.showAlert('Invalid username or password.');	
		}
		
	};
  //--------------------------------------------
  $scope.logout = function() {   $location.path('/app/login');   };
  //--------------------------------------------
   // An alert dialog
	 $scope.showAlert = function(msg) {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Warning Message',
		 template: msg
	   });
	 };
  //--------------------------------------------
})

.controller('ListnsCtrl'
	,function ($scope, Getservice) {
       Getservice.getNhansu().
       success(function(result){
            $scope.data = result.nhansu;
        });
})

.controller('DetailnsCtrl'
	,function ($scope,$stateParams, Getservice) {
		var currentId = $stateParams.id;
       Getservice.getNhansu().
       success(function(result){
 
            var data =result.nhansu ;
            for (var i = 0; i < data.length; i++) {
            	if(data[i].ma_nhan_vien == parseInt(currentId)){
            	 $scope.row = data[i];
            	 //console.log(data[i]);
            	}
            }
        });
})

.controller('DashCtrl', function($scope, $stateParams , Profiles) {
	$scope.profiles = Profiles.all();
});

