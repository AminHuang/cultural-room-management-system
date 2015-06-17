var roomDao = require("./Room.js");
var applyDao = require("./Apply.js");
var userDao = require("./User.js");

exports = module.exports = {};

exports.init = function() {
	roomDao.init();
}