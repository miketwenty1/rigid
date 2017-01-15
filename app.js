var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var add_patient = require('./routes/add_patient');
var create_patient = require('./routes/create_patient');
var create_trial = require('./routes/create_trial');
var doctor = require('./routes/doctor');
var index = require('./routes/index');
var dlogin = require('./routes/dlogin');
var pretrial = require('./routes/pretrial');
var question = require('./routes/question');
var trials = require('./routes/trials');
var users = require('./routes/users');
var ind = require('./routes/ind');
var test = require('./routes/test');
var test2 = require('./routes/test2');
var test3 = require('./routes/test3');
var trialers = require('./routes/trialers');
var trialee = require('./routes/trialee');
var thanks = require('./routes/thanks');
var thank2 = require('./routes/thank2');
var query = require('./routes/query');


var app = express();
app.locals.datastore = require('./store.json');
app.locals.secret = require('./.secrets.json');
app.locals.datastore2 = require('./store2.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/client", express.static(__dirname + '/client'));

app.use('/add_patient', add_patient);
app.use('/create_patient_page', create_patient);
app.use('/create_trials_view', create_trial);
app.use('/doctor', doctor);
app.use('/', index);
app.use('/dlogin', dlogin);
app.use('/pretrial', pretrial);
app.use('/question_view', question);
app.use('/trials_view', trials);
app.use('/users', users);
app.use('/ind', ind);
app.use('/test', test);
app.use('/test2', test2);
app.use('/test3', test3);
app.use('/trialers', trialers);
app.use('/trialee', trialee);
app.use('/thanks', thanks);
app.use('/thank2', thanks);
app.use('/query', query);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
