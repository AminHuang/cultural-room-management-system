$(function() {

  // render_event_form();

  var mdata={};

  // var render_event_form = function() {
    $('#roomAdd').on('click', function(event){
      // debugger;
      var form = $(event.target).closest("form");
      var data={};
      var tmpdata = {};
      tmpdata.room_name = $("#room-name").val();
      tmpdata.detail = $("#room-detail").val();
      tmpdata.discuss = [];
      console.log(tmpdata);
      data['content'] = tmpdata;
      console.log(data);
      $.ajax({
        type: 'POST',
        url: '/dashboard/roomAdd',
        data: data,
        success: function(data, textStatus) {
          console.log(data);
          if(data.success) {
            alert("创建成功");
            tmpdata.room_name = $("#room-name").val("");
            tmpdata.detail = $("#room-detail").val("");
          } else {
            alert("创建失败");
          }
        }
      });
    });
  // };
});