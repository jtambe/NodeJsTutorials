

// prototype pattern  in javascripting
var peopleProto = function()
{
	// this is an empty object in prototype pattern
	// since each protope object created is blank, each object is lightweight
};
// prototype keyword keeps it shared
// here we are initializing these properties with defaults which are further overridden
peopleProto.prototype.age = 0;
peopleProto.prototype.name = "";
peopleProto.prototype.state = "";

peopleProto.prototype.printPerson = function(){
	console.log(this.name + ", " + this.age + ", " + this.state )
};

var person1 = new peopleProto(); // since each protope object created is blank, each object is lightweight
person1.name = "juan";
person1.age = 23;
person1.state = "CA"

var person2 = new peopleProto(); // since each protope object created is blank, each object is lightweight
// person2.name = "jessica";
person2.age = 33;
person2.state = "VA";


person1.printPerson();
person2.printPerson();

// disadvtange
// 1. cannot have everything packed like constructor pattern
// 2. assigning properties in mutliple object is combursome

