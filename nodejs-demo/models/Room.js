var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var config = require('./config.json');
if(!!config.redis)
  var redis = require('redis').createClient();
var RoomSchema = new Schema({
  room_name:String,
  detail:String,
  discuss:[{
    nickname:String,
    content:String,
    create_date:{type:Date, default:Date.now}
  }]
});


var Room = mongodb.mongoose.model("Room", RoomSchema);
var RoomDAO = function() {};
module.exports = new RoomDAO();

RoomDAO.prototype.init = function() {
  Room.find({}, function(err, obj){
    for(var i = 0;i < obj.length; i++) {
      redis.hset("room",obj[i].room_name,JSON.stringify(obj[i]),function(err,res){
       //
      });
    }
  });
}

RoomDAO.prototype.save = function(obj, callback) {
  var instance = new Room(obj);
  if(!!config.redis) {
    redis.hset("room",instance.room_name,JSON.stringify(obj),function(err,res){
      //
    });
  }
  instance.save(function(err){  
    callback(err);
  });
}

RoomDAO.prototype.findAll = function(callback) {
  if(!!config.redis) {
    redis.hgetall("room",function(err,res) {
      var rooms = [];
      for(var x in res) {
        rooms.push(JSON.parse(res[x]));
      }
      callback(err,rooms);
    });
  }
  else {
    Room.find({}, function(err, obj){
      callback(err, obj);
    });
  }
};


RoomDAO.prototype.findByName = function(room_name, callback) {
  if(!!config.redis) {
    redis.hget("room",room_name,function(err,res) {
      callback(err,JSON.parse(res));
    });
  }
  else {
    Room.findOne({room_name:room_name}, function(err, obj){
      callback(err, obj);
    });
  }
};

RoomDAO.prototype.updateByName = function(room_name,json,callback) {
  if(!!config.redis) {
    redis.hset("room",room_name,function(err,res) {
      callback(err,json);
    });
  }
  Room.update({room_name:room_name},{$set:{discuss:json}},function(err,obj){
    //callback(err,obj);
  });   
}
