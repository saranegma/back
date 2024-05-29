var createError = require('http-errors');
var express = require('express');

var logger = require('morgan');
var cors = require('cors')
const mongoose=require('mongoose')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eventsRouter=require('./routes/events');
var app = express();

// view engine setup
app.use(cors())

app.use(logger('dev'));

//conectting to db 
mongoose.connect('mongodb+srv://soso2023:soso20252024@cluster0.lc8h0nw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);

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
