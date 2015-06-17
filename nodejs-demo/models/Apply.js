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
var ApplyDAO = function() {};
module.exports = new ApplyDAO();

ApplyDAO.prototype.save = function(obj, callback) {
  var instance = new Apply(obj);
  instance.save(function(err){
    callback(err);
  });
}

ApplyDAO.prototype.findByName = function(apply_room, callback) {
Apply.findOne({apply_room:apply_room}, function(err, obj){
callback(err, obj);
});
};

ApplyDAO.prototype.findByDate = function(apply_date, callback) {
Apply.findOne({apply_date:apply_date}, function(err, obj){
callback(err, obj);
});
};

ApplyDAO.prototype.findByNameAndDate = function(apply_room, apply_date, callback) {
Apply.find({apply_room:apply_room, apply_date:apply_date}, function(err, obj){
callback(err, obj);
});
};

ApplyDAO.prototype.findById = function(apply_id, callback) {
Apply.findOne({apply_id:apply_id}, function(err, obj){
callback(err, obj);
});
};

ApplyDAO.prototype.updateByName = function(Apply_name,json,callback) {
  Apply.update({Apply_name:Apply_name},json,function(err,obj){
    callback(err,obj);
  });
}