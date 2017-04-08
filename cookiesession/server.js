
// npm install express --save
// npm install morgan --save
// npm install cookie-parser --save
// npm install express-session --save

var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

var cookieParser = require("cookie-parser");
var session = require("express-session");

// all traffic passes through morgan get, post etc
var morgan = require("morgan");
app.use(morgan("dev"));
// all traffic passes through cookieparser
app.use(cookieParser());
// all traffic passes through session
app.use(session({
				secret: "anystringtext",
				saveUninitialized: true,
				resave: true
				}));


app.use("/", function(req,res){
	// express function
	res.send("this is being sent via express res.send");
	console.log(req.cookies);
	console.log("*******");
	console.log(req.session);
});


// this app listens on following port
app.listen(port);
console.log("server is running on port "+ port);




