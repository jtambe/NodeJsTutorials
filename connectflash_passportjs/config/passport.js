var LocalStrategy = require("passport-local").Strategy;

var User = require("../app/models/user");

module.exports = function(passport){

	// serializing and deserializing a user
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		
		User.findById(id, function(err, user){
			done(err, user);
		});
	});


	passport.use('local-signup', new LocalStrategy({
								 usernameField:'email',
								 passwordField: 'password', 
								 passReqToCallback: true
								}, 

		function(req, email, password, done){
			process.nextTick(function(){
				User.findOne({'local.username':email}, function(err, user){
					if(err)
					{
						return done(err);
					}
					if(user)
					{
						return done(null, false, req.flash('signupMessage', 'email already taken'));
					}
					else
					{
						var newuser = new User();
						newuser.local.username = email;
						newuser.local.password = password;

						newuser.save(function(err){
							if(err){
								throw err;
							}
							return done(null, newuser);
						});
					}


				});
			});
		}

	))
}