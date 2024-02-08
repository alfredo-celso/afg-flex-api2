var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Routes definition
var indexRouter = require('./routes/index');
var api2ESRouter = require('./routes/flex-api2-ES');
var api2PLRouter = require('./routes/flex-api2-PL');
var api2DERouter = require('./routes/flex-api2-DE');
var api2ILRouter = require('./routes/flex-api2-IL');
var expressHbs = require('express-handlebars');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs', 
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Pages definition
app.use('/', indexRouter);
app.use('/es', api2ESRouter);
app.use('/flex-api2-PL', api2PLRouter);
app.use('/de', api2DERouter);
app.use('/iz', api2ILRouter);

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
