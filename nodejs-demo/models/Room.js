var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
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
module.exports = Room;

