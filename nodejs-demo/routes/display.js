var Room = require('./../models/Room.js');

var name;

exports.display = function(req, res){
  var room_name = req.query.room;
  name = room_name;
  console.log(room_name);
  var room = Room.findByName(room_name,function(err,obj){
    if(!obj) {
      res.redirect('/');
    } else {
      res.render('display', { title: room_name, room: obj });
    }
  });
  
};

exports.getRoom = function(req, res){
  var room_name = req.query.room;
  console.log(room_name);
  var room = Room.findByName(name,function(err,obj){
    if(!obj) {
      res.redirect('/');
    } else {
      res.send({'success': true, room:obj});
    }
  });
  
};

exports.discussAdd = function(req, res) {
  console.log(req.body.content);
  var json = req.body.content;
  console.log(name);
  var room = Room.findByName(name,function(err,obj){
    if(!obj) {
      res.send({'success':false, 'err':'无该文化室'});
    } else {
      obj.discuss.push(json);
      console.log(obj);
      Room.updateByName(name, json, function(err) {
        if(err) {
          res.send({'success':false, 'err':err});
        } else {
          res.send({'success': true, room:obj});
        }
      });
    }
  });
};