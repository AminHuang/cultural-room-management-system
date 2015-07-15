/**
 * Models
 */
var User = require("./models/User");
var Room = require("./models/Room");
var Apply = require("./models/Apply");


/**
 * Mock data
 */

var users = [{
  "user_id": "12330402",
  "user_name": "joyee",
  "email": "joyeecheung@outlook.com",
  "password": "123456"
},
{
  "user_id": "12330102",
  "user_name": "john",
  "email": "john@outlook.com",
  "password": "123456"
},
{
  "user_id": "12330212",
  "user_name": "anne",
  "email": "anne@outlook.com",
  "password": "123456"
},
{
  "user_id": "12330232",
  "user_name": "rom",
  "email": "rom@outlook.com",
  "password": "123456"
}];

var rooms = [{
  "room_name" : "慎六文化室",
  "detail" : "这里是慎六文化室",
  "discuss" : []
},
{
  "room_name" : "慎五文化室",
  "detail" : "这里是慎五文化室",
  "discuss" : []
},
{
  "room_name" : "至四文化室",
  "detail" : "这里是至四文化室",
  "discuss" : []
},
{
  "room_name" : "至二文化室",
  "detail" : "这里是至二文化室",
  "discuss" : []
}]

var applies = [{
  "apply_room" : "慎五文化室",
  "apply_id" : "12330402",
  "apply_name" : "joyee",
  "apply_team" : "12计应",
  "start_time" : "8",
  "end_time" : "9",
  "apply_num" : "10",
  "apply_date" : new Date("2015-06-28T00:00:00Z")
},
{
  "apply_room" : "慎六文化室",
  "apply_id" : "12330102",
  "apply_name" : "john",
  "apply_team" : "12数媒",
  "start_time" : "19",
  "end_time" : "20",
  "apply_num" : "3",
  "apply_date" : new Date("2015-06-26T00:00:00Z")
},
{
  "apply_room" : "至四文化室",
  "apply_id" : "12330212",
  "apply_name" : "anne",
  "apply_team" : "12电政",
  "start_time" : "16",
  "end_time" : "17",
  "apply_num" : "3",
  "apply_date" : new Date("2015-06-25T00:00:00Z")
},
{
  "apply_room" : "慎五文化室",
  "apply_id" : "12330232",
  "apply_name" : "rom",
  "apply_team" : "12电政",
  "start_time" : "13",
  "end_time" : "14",
  "apply_num" : "7",
  "apply_date" : new Date("2015-06-28T00:00:00Z")
},
{
  "apply_room" : "至二文化室",
  "apply_id" : "12330402",
  "apply_name" : "joyee",
  "apply_team" : "学习小组",
  "start_time" : "13",
  "end_time" : "14",
  "apply_num" : "7",
  "apply_date" : new Date("2015-06-30T00:00:00Z")
}];

/**
 * Reset the database
 */
Apply.remove().exec()
  .then(function() {
    return Room.remove().exec();
  }).then(function() {
    return User.remove().exec();
  }).then(function() {
    return User.create(users);
  }).then(function() {
    return Room.create(rooms);
  }).then(function() {
    return Apply.create(applies);
  }).then(function() {
    console.log('The database has been reset,' +
      ' enter ctrl-c to exit');
    return true;
  }).then(undefined, function(err) {
    console.log(err);
    return true;
  });
