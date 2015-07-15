var Room = require('./../models/Room.js');
var Apply = require('./../models/Apply.js');

var name;

exports.display = function(req, res){
  var room_name = req.query.room;
  name = room_name;
  
  // console.log(room_name);
  var room = Room.findOne({room_name:room_name},function(err,obj){
    if(!obj) {
      res.redirect('/');
    } else {
      var room = obj;
      var date = new Date();
      var apply_ = Apply.find({apply_room:name, apply_date:date.toLocaleDateString()}, function(err,obj){
        if(!obj) {
          res.render('display', { title: room_name, room: room, applied:[] });
        } else {
          res.render('display', { title: room_name, room: room, applied:obj });
        }
      });
      // res.render('display', { title: room_name, room: obj });
    }
  });
  
};

exports.getRoom = function(req, res){
  var room_ = Room.findOne({room_name:name},function(err,obj){
    if(!obj) {
      res.redirect('/');
    } else {
      // var room = obj;
      // var date = new Date();
      // console.log(date);
      // console.log(name);
      // var apply_ = Apply.findByNameAndDate(name, date.toLocaleDateString(), function(err,obj){
      //   if(!obj) {
      //     res.send({'success': false, room:room, applied:{}});
      //   } else {
      //     res.send({'success': true, room:room, applied:obj});
      //   }
      // });
      res.send({'success': true, room:obj});
    }
  });
  
};

exports.discussAdd = function(req, res) {
  console.log(req.body.content);
  var json = req.body.content;
  console.log(name);
  var room = Room.findOne({room_name:name},function(err,obj){
    if(!obj) {
      res.send({'success':false, 'err':'无该文化室'});
    } else {
      obj.discuss.push(json);
      console.log(obj);
      Room.update({room_name:name}, {$set:{discuss:json}}, function(err) {
        if(err) {
          res.send({'success':false, 'err':err});
        } else {
          res.send({'success': true, room:obj});
        }
      });
    }
  });
};