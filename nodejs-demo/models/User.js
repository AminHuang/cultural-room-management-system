var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var UserSchema = new Schema({
  user_id: String,
  user_name:String,
  email:String,
  password:String
});


var User = mongodb.mongoose.model("User", UserSchema);
var UserDAO = function() {};
module.exports = new UserDAO();

UserDAO.prototype.save = function(obj, callback) {
  var instance = new User(obj);
  instance.save(function(err){
    callback(err);
  });
}

UserDAO.prototype.findByName = function(user_id, callback) {
User.findOne({user_id:user_id}, function(err, obj){
callback(err, obj);
});
};

UserDAO.prototype.updateByName = function(user_id,json,callback) {
  User.update({user_id:user_id},json,function(err,obj){
    callback(err,obj);
  });
}