require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const helmet = require('helmet');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(helmet());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Init passport config MUST HAPPEN AFTER SESSION CONFIG
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Write Custom Middleware to access the user on every response
app.use((req, res, next) => {
  let alerts = req.flash();
  console.log(alerts);
  res.locals.alerts = alerts;
  res.locals.currentUser = req.user;
  console.log(req.user);
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/dashboard', isLoggedIn, (req, res) => {
  res.render('dashboard');
});

app.use('/auth', require('./routes/auth'));
app.use('/dashboard' , require('./routes/dashboard'));
app.use('/stocks', require('./routes/stocks'));
// app.use('/dino', isLoggedIn, require('./routes/dinos'));

var server = app.listen(process.env.PORT || 4000, ()=> console.log(`🎧You're listening to the smooth sounds of port ${process.env.PORT || 4000}🎧`));

module.exports = server;