var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var RoomSchema = new Schema({
  room_name:String,
  detail:String,
  discuss:[{
    number: String,
    nickname:String,
    content:String,
    create_date:{type:Date, default:Date.now}
  }]
});


var Room = mongodb.mongoose.model("Room", RoomSchema);
var RoomDAO = function() {};
module.exports = new RoomDAO();

RoomDAO.prototype.save = function(obj, callback) {
  var instance = new Room(obj);
  instance.save(function(err){
    callback(err);
  });
}

RoomDAO.prototype.findByName = function(room_name, callback) {
Room.findOne({room_name:room_name}, function(err, obj){
callback(err, obj);
});
};

RoomDAO.prototype.updateByName = function(room_name,json,callback) {
  Room.update({room_name:room_name},json,function(err,obj){
    callback(err,obj);
  });
}