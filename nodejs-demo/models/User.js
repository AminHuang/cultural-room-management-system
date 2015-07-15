var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var UserSchema = new Schema({
  user_id: String,
  user_name:String,
  email:String,
  password:String
});


var User = mongodb.mongoose.model("User", UserSchema);
module.exports = User;