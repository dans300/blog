var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var app = express();
var bodyParser = require('body-parser')

//const User = require('./models/User');

//connect to mongodb
 mongoose.connect('mongodb://localhost:27017/mongo_test_queries', {}).
 then(() => {
    console.log('Connection has been made');
  })
  .catch(err => {
    console.error('App starting error:', err);
    process.exit(1); // Exit the app if there is a connection error
  });





//ici

var fs= require('file-system');
// Include controllers
fs.readdirSync('controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
  const route = require('./controllers/' + file)
  route.controller(app)
  }
 })
 // view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'pug');
//hasta aqui 

//const userController = require('./controllers/users');
//userController.controller(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
 });
 app.listen(3000, function() { console.log('listening on 3000') })
 module.exports = app;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
