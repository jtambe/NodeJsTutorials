
// npm install express --save
// npm install morgan --save
// npm install cookie-parser --save
// npm install express-session --save
// npm install mongoose --save
// npm install ejs --save
// npm install body-parser --save

var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

var cookieParser = require("cookie-parser");
var session = require("express-session");

// mongoose and DB connnection
var mongoose = require("mongoose");
var congifDB = require("./config/database.js");
mongoose.connect(congifDB.url);

var passport = require("passport");
require("./config/passport")(passport);
var flash = require("connect-flash");

var bodyParser = require("body-parser");

// all traffic passes through morgan get, post etc
var morgan = require("morgan");
app.use(morgan("dev"));
// all traffic passes through cookieparser
app.use(cookieParser());

// for html forms - urlencoded
// extended - send also json objects not just string etc
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');

// all traffic passes through session
app.use(session({
				secret: "anystringtext",
				saveUninitialized: true,
				resave: true
				}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());




require("./app/routes.js")(app, passport)

// this app listens on following port
app.listen(port);
console.log("server is running on port "+ port);




