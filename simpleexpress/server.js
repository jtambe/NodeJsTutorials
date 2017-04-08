
// npm install express --save

var express = require("express");
var app = express();


var port = process.env.PORT || 8080;

// all traffic passes through morgan get, post etc
var morgan = require("morgan");
app.use(morgan("dev"));


app.use("/", function(req,res){
	// express function
	res.send("this is being sent via express res.send");
});


// this app listens on following port
app.listen(port);
console.log("server is running on port "+ port);




