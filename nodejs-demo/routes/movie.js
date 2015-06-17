var Movie = require('./../models/Movie.js');

exports.movieAdd = function(req, res) {
  if(req.params.name) { // update?
    return res.render('movie', {
      title: req.params.name + '|电影|管理|moive.me',
      label: '编辑电影:'+req.params.name,
      movie: req.params.name
    });
  } else {
    return res.render('movie', {
      title: '新增加|电影|管理|moive.me',
      label: '新增加电影',
      moive: false
    });
  }
}

exports.doMovieAdd = function(req, res) {
  console.log(req.body.content);
  var json = req.body.content;
  var movie = Movie.findByName(json.name,function(err,obj){
    if(!!obj) {
      Movie.updateByName(json.name,json,function(err,obj){});
    } else {
      Movie.save(json, function(err) {
        if(err) {
          res.send({'success':false, 'err':err});
        } else {
          res.send({'success': true});
        }
      });
    }
  });
  
}

exports.movieJSON = function(req, res) {
Movie.findByName(req.params.name,function(err, obj){
res.send(obj);
});
}
