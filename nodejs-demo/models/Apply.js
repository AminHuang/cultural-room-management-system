var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var ApplySchema = new Schema({
  apply_room:String,
  apply_id:String,
  apply_name:String,
  apply_team:String,
  apply_date: {type:Date, default:Date.now},
  start_time: String,
  end_time: String,
  apply_num: String
});


var Apply = mongodb.mongoose.model("Apply", ApplySchema);
module.exports = Apply;

