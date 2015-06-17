
// function ApplyCtrl($scope, $http, $location) {

//   $http.get('/apply/getRoom').success(function(data){
//     console.log(data);
//       $scope.rooms = data.rooms;
//       $scope.applied.apply_name = data.user_name;
//       console.log($scope.applied.apply_name);
//       $scope.user_id = data.user_id;
//       $scope.user_name = data.user_name;
//     }).error(function(data){
//       alert("error");
//     });

//   $scope.applyAdd = function() {
//     var data={};
//     var tmpdata = {
//       apply_room: $scope.applied.apply_room,
//       apply_id: $scope.applied.apply_id,
//       apply_name: $scope.applied.apply_name,
//       apply_team: $scope.applied.apply_team,
//       apply_date: $scope.applied.apply_date,
//       start_time: $scope.applied.start_time,
//       end_time: $scope.applied.end_time,
//       apply_num: $scope.applied.apply_num
//     }
//     if(!(tmpdata.apply_room && tmpdata.apply_team && tmpdata.apply_date && tmpdata.start_time && tmpdata.end_time && tmpdata.apply_num)) {
//       console.log(tmpdata);
//         return ;
//       }
//       console.log(tmpdata);
//       if (parseInt(tmpdata.start_time) >= parseInt(tmpdata.end_time)) {
//         alert("请正确选择时间段!");
//         return;
//       }
//     data['content'] = tmpdata;
//     // $http.post('/apply/add',data).success(function(data){
//     //   if(data.success) {
//     //     alert("success");
//     //   } else {
//     //     alert("error");
//     //   }
//     // }).error(function(data){
//     //   alert("error");
//     // });
//   }

// }





$(function() {

  var mdata={};
 
  // var render_event_form = function() {
    $('#applybtn').on('click', function(event){
      // debugger;

      var data={};
      var tmpdata = {};
      
      tmpdata.apply_room = $("#applyroom").val();
      tmpdata.apply_id = $("#applyid").val();
      tmpdata.apply_name = $("#applyname").val();
      tmpdata.apply_team = $("#applyteam").val();
      tmpdata.apply_date = $("#applydate").val();
      tmpdata.start_time = $("#startTime").val();
      tmpdata.end_time = $("#endTime").val();
      tmpdata.apply_num = $("#applynum").val();
      if(!(tmpdata.apply_room && tmpdata.apply_team && tmpdata.apply_date && tmpdata.start_time && tmpdata.end_time && tmpdata.apply_num)) {
        return ;
      }
      var today = new Date();
      var date = new Date(tmpdata.apply_date);
      console.log(date);
      if (date.getTime() < today.getTime()) {
        alert("只能申请今天以后的时间!");
        return;
      }
      if (parseInt(tmpdata.start_time) >= parseInt(tmpdata.end_time)) {
        alert("请正确选择时间段!");
        return;
      }

      console.log(tmpdata);


      data['content'] = tmpdata;
      console.log(data);
      $.ajax({
        type: 'POST',
        url: '/apply/add',
        data: data,
        success: function(data, textStatus) {
          // debugger;
          console.log(data);
          if(data.success) {
            alert("success");
            window.location.href="/about#applied"
          } else {
            alert("error");
          }
        }
      });
    });
  // };
});