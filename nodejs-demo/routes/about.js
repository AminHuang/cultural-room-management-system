
var Apply = require('./../models/Apply.js');

exports.about = function(req, res) {
  var old = Apply.findById(req.session.user.user_id, function(err,obj){
    console.log(obj);
    res.render('about', {title:'我的主页', applies: obj});
  });
}

exports.deleteApply = function(req, res) {
  var json = req.body;
  console.log(json);
  var del = Apply.remove(json._id,function(err,obj){
    if(err) {
      res.send({'success':false, 'err':err});
    } else {
      res.send({'success': true});
    }
  });
};