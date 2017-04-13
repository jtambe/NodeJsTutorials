
// import the model user
var User = require("./models/user");

module.exports = function(app,passport) {
	
	// shows hello world when tested for localhost:8080
	app.get("/", function(req,res){
		res.render("index.ejs");
	});

	app.get("/signup", function(req,res){
		res.render("signup.ejs",{message: req.flash('signupMessage')});
	});

	app.post("/signup", passport.authenticate('local-signup',{
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	// shows success when tested for localhost:8080/tambe_jayesh/mypassword
	// username is first param and password is second param
	app.get("/:username/:password", function(req,res){
		var newUser = new User();
		newUser.local.username = req.params.username;
		newUser.local.password = req.params.password;
		console.log(newUser.local.username + " - "+ newUser.local.password );

		newUser.save( function(err){

			if(err){
				throw err;
			}
		});

		res.send("success");
	});
}