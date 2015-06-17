$(function() {
  $(".delete").on('click', function(event){
    var $this = $(this);
    var _id = $this.data("id");
    var data = {};
    data._id = _id;

    $.ajax({
        type: 'POST',
        url: '/about/deleteApply',
        data: data,
        success: function(data, textStatus) {
          // debugger;
          console.log(data);
          if(data.success) {
            $this.closest("tr").remove();
          } else {
            alert("error");
          }
        }
      });

  });
});