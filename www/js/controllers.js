angular.module('starter.controllers', ['ionic'])

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
	,function ($scope,$ionicLoading, NhansuService) {

	    $ionicLoading.show({
	    content: 'Loading',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 0
	      });

       NhansuService.getNhansu().
       success(function(result){
       	$ionicLoading.hide();
        $scope.data = result.nhansu;
        $scope.num=result.nhansu.length;
        });
})

.controller('DetailnsCtrl'
	,function ($scope,$stateParams,$ionicLoading, NhansuService) {

	   $ionicLoading.show({
	    content: 'Loading',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 0
	      });

		var currentId = $stateParams.id;
       NhansuService.getNhansu().
       success(function(result){

            var data =result.nhansu ;
            for (var i = 0; i < data.length; i++) {
            	if(data[i].ma_nhan_vien == parseInt(currentId)){
        		$ionicLoading.hide();
        	    $scope.row = data[i];
            	 //console.log(data[i]);
            	}
            }
        });
})

.controller('HomeCtrl'
	,function ($scope, $stateParams,$ionicLoading, HomeService) {
      HomeService.getHomeService().
      success  (function(result){
  	  $scope.data=result;
      });

})
.controller('HomeDetailCtrl',
	function ($scope,$stateParams,$ionicLoading, HomeService){
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
	,function ($scope, $stateParams,$ionicLoading, PhongbanService) {
	    $ionicLoading.show({
	    content: 'Loading',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 0
	      });
      PhongbanService.getPhongbanService().
      success  (function(result){
      	$ionicLoading.hide();
      	$scope.data=result;
      	$scope.num=result.length;
      });

})
.controller('PhongbanDetailCtrl',
	function ($scope,$stateParams,$ionicLoading, PhongbanService){
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
	,function ($scope, $stateParams,$ionicLoading, ChucvuService) {
      ChucvuService.getChucvuService().
      success  (function(result){
		$scope.data=result;
	  	$scope.num=result.length;
      });

})
.controller('ChucvuDetailCtrl',
	function ($scope,$stateParams,$ionicLoading, ChucvuService){
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
	function ($scope,$stateParams,$ionicLoading, $http){

		 $ionicLoading.show({
	    content: 'Loading',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 0
	      });
		var currentId = $stateParams.id;
$http.get('http://localhost/server/larave_fw/ql_nhansuService_5.2/api/detail/'+currentId)
.success ( function(result){
	$ionicLoading.hide();
	$scope.data=result;
	//console.log(result);
});
})
.controller('PostCtrl', function($scope, $http , $window, $ionicPopup) {
    $scope.data = {};
    $scope.submit = function(){
        var link = 'http://localhost/server/larave_fw/ql_nhansuService_5.2/api/storeapi';
        $http.post(link, {message : $scope.data.message,title : $scope.data.title})
        .then(function (res){

          $window.location.href = '#/app/post';
         $window.location.reload();
         $scope.showAlert('Post success');
        });
    };

      $http.get('http://localhost/server/larave_fw/ql_nhansuService_5.2/api/repost')
      .success ( function(res){
        $scope.data2=res;
        //console.log(res);
      });

      $scope.delpost= function(id){
 var link = 'http://localhost/server/larave_fw/ql_nhansuService_5.2/api/delpost/'+id;
        $http.delete(link, {delid : id})
        .then(function (res){
         // $scope.showAlert('Success');
          $window.location.href = '#/app/post';
         $window.location.reload();
      
        });
      };
     $scope.showAlert = function(msg) {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Alert Message',
		 template: msg
	   });
	 };
});
