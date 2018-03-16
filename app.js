const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session')

const index = require('./routes/index');
const users = require('./routes/users');
//signup + login
const login = require('./routes/access/login');
const signup = require('./routes/access/signup');
// car routes
const carGet = require('./routes/car/car');
const carDelete = require('./routes/car/delete');
const carEdit = require('./routes/car/edit');
const carRegister = require('./routes/car/register');
//profile routes
const profileGet = require('./routes/profile/profile');
const profileDelete = require('./routes/profile/delete');
const profileEdit = require('./routes/profile/Edit');
//damage routes
const damageGet = require('./routes/damage/damage');
// const damageEdit = require('./routes/damage/edit');
const damageNew = require('./routes/damage/new');


const app = express();


//Setting up session
app.use(session({
    secret: 'drinking all the wine',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
//signup + login
app.use('/login', login);
app.use('/signup', signup);
//car
app.use('/carRegister', carRegister);
app.use('/carDelete', carDelete);
app.use('/carEdit', carEdit);
app.use('/carGet', carGet);
//profile
app.use('/profileGet', profileGet);
app.use('/profileEdit',profileEdit);
app.use('/profileDelete', profileDelete);
//damage
app.use('/damageGet', damageGet);
// app.use('/damageEdit', damageEdit);
app.use('/damageNew', damageNew);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
});

module.exports = app;
