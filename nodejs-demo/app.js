
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var search = require('./routes/search');
var apply = require('./routes/apply');
var movie = require('./routes/movie');
var dashboard = require('./routes/dashboard');
var http = require('http');
var path = require('path');
var ejs = require('ejs');

var SessionStore = require("session-mongoose")(express);

var store = new SessionStore({
  url: "mongodb://localhost/session",
  interval: 120000
});


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
// app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.cookieSession({secret : 'fens.me'}));
app.use(express.session({
  secret : 'fens.me',
  store: store,
  cookie: { maxAge: 900000 }
}));
app.use(function(req, res, next){
  res.locals.user = req.session.user;
  var err = req.session.error;
  delete req.session.error;
  res.locals.message = '';
  if(err) {
    res.locals.message = '<div class="alert alert-error">' + err + '</div>';
  }
  next();
});
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/users', user.list);
app.all('/login', notAuthentication);
app.get('/login', routes.login);
app.post('/login', routes.doLogin);
app.get('/logout', authenticaiton);
app.get('/logout', routes.logout);
app.all('/signup', notAuthentication);
app.get('/signup', routes.signup);
app.post('/signup', routes.doSignup);

app.all('/dashboard', authenticaiton);
app.get('/dashboard', dashboard.dashboard);
app.post('/dashboard/roomAdd',dashboard.roomAdd);

app.all('/apply', authenticaiton);
app.get('/apply', apply.apply);
app.post('/apply/add', apply.applyAdd);

app.all('/search', authenticaiton);
app.get('/search', search.search);


app.get('/home', authenticaiton);
app.get('/home', routes.home);
// app.get('/apply', routes.apply);

app.get('/movie/add',movie.movieAdd);//增加
app.post('/movie/add',movie.doMovieAdd);//提交
// app.get('/movie/:name',movie.movieAdd);//编辑查询
// app.get('/movie/json/:name',movie.movieJSON);//JSON数据

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

function authenticaiton(req, res, next) {
  if(!req.session.user) {
    req.session.error = '请先登录！';
    return res.redirect('/login');
  }
  next();
}

function notAuthentication(req, res, next) {
  if(req.session.user) {
    req.session.error = '已登录!';
    return res.redirect('/');
  }
  next();
}