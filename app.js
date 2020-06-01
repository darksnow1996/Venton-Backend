var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const {CarOwner} = require('./model');
const seedData = require('./helpers/excel');
const{MONGO_URL,PORT} = require('./config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.status(err.statusCode || 500);
  res.json({message:err.message, status:err.statusCode});
});


mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(async function (result) {
   // console.log(data.length);
     const CarOwnercount = await CarOwner.estimatedDocumentCount().exec();
  //  console.log(CarOwnercount);
     
    CarOwnercount === 0 ? seedData():null;
  const port = PORT || "6000";
  app.listen(port, () => {
    console.log("listening on port " + port);
  });
})
.catch(function(err){
  throw err;
})


module.exports = app;
