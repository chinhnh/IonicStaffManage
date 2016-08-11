angular.module('starter.services', [])

.factory('HomeService', function($http) {
  var dataService={};
dataService.getHomeService=function (){
  return $http.get('data/home.json');
}
return dataService;

})
.factory('NhansuService',['$http',function($http){
var dataService={};
dataService.getNhansu=function (){
  return $http.get('http://localhost/server/larave_fw/ql_nhansu/api/nhansu');
}
return dataService;


}])
.factory('PhongbanService',function($http){
var dataService={};
dataService.getPhongbanService=function(){
  return $http.get('http://localhost/server/larave_fw/ql_nhansu/api/phongban');
}
return dataService;
})
.factory('ChucvuService',function($http){
var dataService={};
dataService.getChucvuService=function(){
  return $http.get('http://localhost/server/larave_fw/ql_nhansu/api/chucvu');
}
return dataService;
});
// .factory('Loading',function($ionicLoading){
//       var data;
//       data.loading=function(){
//       content: 'Loading',
//       animation: 'fade-in',
//       showBackdrop: true,
//       maxWidth: 200,
//       showDelay: 0
//         };
//         return data;
// });


