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
          } else {
            alert("error");
          }
        }
      });
    });
  // };
});