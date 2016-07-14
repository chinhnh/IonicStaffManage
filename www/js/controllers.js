angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,  $location, $ionicPopup) {
  $scope.loginData = {};

  //--------------------------------------------
   $scope.login = function(user) {
			
		if(typeof(user)=='undefined'){
			$scope.showAlert('Please fill username and password to proceed.');	
			return false;
		}

		if(user.username=='chinh' && user.password=='123456'){
			$location.path('/app/home');
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
	,function ($scope, NhansuService) {
       NhansuService.getNhansu().
       success(function(result){
            $scope.data = result.nhansu;
            $scope.num=result.nhansu.length;
        });
})

.controller('DetailnsCtrl'
	,function ($scope,$stateParams, NhansuService) {
		var currentId = $stateParams.id;
       NhansuService.getNhansu().
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

.controller('HomeCtrl'
	,function ($scope, $stateParams, HomeService) {
      HomeService.getHomeService().
      success  (function(result){
      	$scope.data=result;
      });
	
})
.controller('HomeDetailCtrl',
	function ($scope,$stateParams, HomeService){
		var currentId = $stateParams.id;
HomeService.getHomeService().
success ( function(result){
	 var data =result;
for (var i = 0; i < data.length; i++) {
	if(data[i].id == parseInt(currentId)){
	$scope.row=data[i];
	
}
}
});
})
.controller('PhongbanCtrl'
	,function ($scope, $stateParams, PhongbanService) {
      PhongbanService.getPhongbanService().
      success  (function(result){
      	$scope.data=result;
      	$scope.num=result.length;
      });
	
})
.controller('PhongbanDetailCtrl',
	function ($scope,$stateParams, PhongbanService){
		var currentId = $stateParams.id;
PhongbanService.getPhongbanService().
success ( function(result){
	 var data =result;
for (var i = 0; i < data.length; i++) {
	if(data[i].id == parseInt(currentId)){
	$scope.row=data[i];
	
}
}
});
})
.controller('ChucvuCtrl'
	,function ($scope, $stateParams, ChucvuService) {
      ChucvuService.getChucvuService().
      success  (function(result){
      	$scope.data=result;
      	$scope.num=result.length;
      });
	
})
.controller('ChucvuDetailCtrl',
	function ($scope,$stateParams, ChucvuService){
		var currentId = $stateParams.id;
ChucvuService.getChucvuService().
success ( function(result){
	 var data =result;
for (var i = 0; i < data.length; i++) {
	if(data[i].id == parseInt(currentId)){
	$scope.row=data[i];
	
}
}
});
})
.controller('DetailCtrl',
	function ($scope,$stateParams, $http){
		var currentId = $stateParams.id;
$http.get('http://nhansu.16mb.com/apidetail/'+currentId)
.success ( function(result){
	$scope.data=result;
	//console.log(result);
});
});





