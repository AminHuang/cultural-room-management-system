
function DisplayCtrl($scope, $http, $location) {

  $http.get('/display/getRoom').success(function(data){
      $scope.room = data.room;
    }).error(function(data){
      alert("error");
    });

  $scope.discussAdd = function() {
    var data={};
    var json = {
      nickname: $scope.discuss.nickname,
      content: $scope.discuss.content
    }
    data['content'] = json;
    data['room_name'] = $scope.discuss.room_name;
    $http.post('/display/discussAdd',data).success(function(data){
      console.log(data);
      $scope.room = data.room;
    }).error(function(data){
      alert("error");
    });
  }

}