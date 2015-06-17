var Apply = require('./../models/Apply.js');
var Room = require('./../models/Room.js');


exports.apply = function(req, res){
  var room = Room.findAll(function(err,obj){
    res.render('apply', { title: '申请', rooms: obj });
  });
  
};

exports.getRoom = function(req, res){
  var room = Room.findAll(function(err,obj){
    var user = req.session.user;
    res.send({rooms: obj, user_id:user.user_id, user_name:user.user_name});
  });
  
};

exports.applyAdd = function(req, res) {
  var json = req.body.content;
  console.log(json);
  var old = Apply.findByNameAndDate(json.apply_room, json.apply_date, function(err,obj){
    console.log(obj);
    if(obj.length == 0) {
      var apply = Apply.save(json, function(err){
        if(err) {
          res.send({'success':false, 'err':err});
        } else {
          res.send({'success': true});
        }
      });
    } else {
      var flag = true;
      for(var i = 0; i < obj.length; i++) {
        var tmp = obj[i];
        console.log(tmp);
        console.log(tmp.end_time);
        console.log(json.start_time);
        if(tmp.end_time >= json.start_time || tmp.start_time <= json.end_time) {
            flag = false;
          res.send({'success':false});
          break;
          
        }
      }
      if(flag) {
        var apply = Apply.save(json, function(err){
          if(err) {
            res.send({'success':false, 'err':err});
          } else {
            res.send({'success': true});
          }
        });
      }
    }



  });
};

