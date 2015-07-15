var Room = require('./../models/Room.js');

exports.dashboard = function(req, res){
  res.render('dashboard', { title: '后台' });
};

exports.roomAdd = function(req, res) {
  console.log(req.body.content);
  var json = req.body.content;
  var room = Room.findOne({room_name:json.room_name},function(err,obj){
    if(!!obj) {
      res.send({'success':false, 'err':'已有该文化室'});
    } else {
      var instance = new Room(json);
      instance.save(function(err) {
        if(err) {
          res.send({'success':false, 'err':err});
        } else {
          res.send({'success': true});
        }
      });
    }
  });
};