exports.search = function(req, res){
  res.render('search', { title: '搜索' });
};

var Apply = require('./../models/Apply.js');
exports.searchDo = function(req, res) {
  var json = req.body.content;
  console.log(json);
  var old = Apply.findByDate(json.apply_date, function(err,obj){
    console.log(obj);
    if(err) {
          res.send({'success':false, 'err':err});
    } else {
          res.send({'success': true, 'apply':obj});
    }
  });
};