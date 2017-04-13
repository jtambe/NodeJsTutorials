var mongoose = require("mongoose");

var userSchema = mongoose.Schema({

	local:{
		username: String,
		password: String
	}

});

// module.exports allows us to acess from outside of the file
module.exports = mongoose.model("User", userSchema);