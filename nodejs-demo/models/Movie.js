var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var MovieSchema = new Schema({
  name: String,
  alias: [String],
  public: Date,
  create_date: {type:Date, default:Date.now},
  images: {
    coverSmall:String,
    coverBig:String
  },
  source:[{
    source: String,
    link:String,
    swfLink:String,
    quality:String,
    version:String,
    lang:String,
    subtitle:String,
    create_date:{type:Date, default:Date.now}
  }]
});

var Movie = mongodb.mongoose.model("Movie", MovieSchema);
var MovieDAO = function() {};
module.exports = new MovieDAO();

MovieDAO.prototype.save = function(obj, callback) {
  var instance = new Movie(obj);
  instance.save(function(err){
    callback(err);
  });
}

MovieDAO.prototype.findByName = function(name, callback) {
Movie.findOne({name:name}, function(err, obj){
callback(err, obj);
});
};

MovieDAO.prototype.updateByName = function(name,json,callback) {
  Movie.update({name:name},json,function(err,obj){
    callback(err,obj);
  });
}