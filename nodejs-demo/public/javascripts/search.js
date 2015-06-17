
function SearchCtrl($scope, $http) {
  $scope.searchApplied = function() {
    var data={};
    // alert($scope.applied.apply_date);
    var json = {
      apply_date: $scope.applied.apply_date
    }
    data['content'] = json;
    $http.post('/search/getApply',data).success(function(data){
      console.log(data);
      $scope.apply_arr = data.apply;
    }).error(function(data){
      alert("error");
    });
  }

}
