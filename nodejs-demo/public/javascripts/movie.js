$(function() {
  var mdata={};
  var url = '/javascripts/movie.json';
  var movie=$('#c_editor').attr('movie');
  if(movie){
url = '/movie/json/'+movie;
}
  $.getJSON(url, function(data){
    mdata = data;
    render_editor_form(mdata);
    render_event_form(mdata);
  });
  var render_editor_form = function(data) {
    $('#c_editor').val($.toJSON(data));
  };
  var render_event_form = function() {
    $('#c_save').on('click', function(event){
      // debugger;
      var data={};
      var tmpdata = jQuery.parseJSON($('#c_editor').val());
      console.log(tmpdata);
      // console.log(mdata);
      // console.log($('#c_editor').val());
      data['content'] = tmpdata;
      console.log(data);
      $.ajax({
        type: 'POST',
        url: '/movie/add',
        data: data,
        success: function(data, textStatus) {
          console.log(data);
          if(data.success) {
            $('#msg').html('success!!');
            $('#msg').addClass('href', '/movie/'+mdata.name);
          } else {
            $('#msg').html(data.err);
            $('#msg').addClass('alert alert-error');
          }
        }
      });
    });
  };
});