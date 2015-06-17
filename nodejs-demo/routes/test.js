
/*
 * GET home page.
 */
// var Room = require('./../models/Room.js');

// exports.index = function(req, res){
//   var room = Room.findAll(function(err,obj){
//     res.render('index', { title: '首页', rooms: obj });
//   });
  
// };

exports.login = function(req, res) {
  res.render('login', { title: '用户登录' })
};

// exports.doLogin = function(req, res) {
//   var json = req.body;
//   console.log(json);
//   var user = User.findByName(json.user_id,function(err,obj){
//     if(!obj) {
//       // res.send({'success':false, 'err':err});
//       req.session.error = '用户不存在';
//       res.redirect('/login');
//       // User.updateByName(json.user_id,json,function(err,obj){});
//     } else if(json.password == obj.password) {
//       req.session.user = obj;
//       console.log(obj);
//       res.redirect('/');
//     } else {
//       req.session.error = '用户名或密码不正确';
//       res.redirect('/login');
//     }
//   });
  // var user={
  //   id:'admin',
  //   password:'admin'
  // }
  // if(req.body.username === user.username && req.body.password === user.password) {
  //   req.session.user = user;
  //   res.redirect('/home');
  // } else {
  //   req.session.error = '用户名或密码不正确';
  //   res.redirect('/login');
  // }
// };

exports.logout = function(req, res) {
  req.session.user = null;
  res.redirect('/');
};

exports.home = function(req, res) {
  res.render('home', {title:'Home'});
};

exports.signup = function(req, res) {
  res.render('signup', {title:'用户注册'});
}

exports.test = function(req,res) {
  res.render('index2', {title:'用户注册'});
  
}
// var User = require('./../models/User.js');
// exports.doSignup = function(req, res) {
//   var json = req.body;
//   console.log(json);
//   console.log(json.user_id);
//   var user = User.findByName(json.user_id,function(err,obj){
//     if(!!obj) {
//       // res.send({'success':false, 'err':err});
//       req.session.error = '用户已存在';
//       res.redirect('/signup');
//       // User.updateByName(json.user_id,json,function(err,obj){});
//     } else {
//       User.save(json, function(err) {
//         if(err) {
//           // res.send({'success':false, 'err':err});
//           req.session.error = '注册出现错误';
//           res.redirect('/signup');
//         } else {
//           // res.send({'success': true});
//           req.session.error = '';
//           res.redirect('/login');
//         }
//       });
//     }
//   });
// }

