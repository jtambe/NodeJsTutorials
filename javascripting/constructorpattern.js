

// constructor pattern  in javascripting
var peopleConstructor = function(name, age, state)
{
	this.age = age;
	this.name = name;
	this.state = state;

	this.printPerson = function(){
		console.log(this.name + ", " + this.age + ", " + this.state )
	};
	
};


// constructor pattern uses new keyword

// for every new object created, age, name , state are created 
// also for each new object, printperson is created
// but we don't want that. Printperson creation for each object is redundant

// this is overcome in prototype pattern
var person1 = new peopleConstructor('jaon', 89, 'CA');
var person2 = new peopleConstructor('juan', 87, 'CA');

person1.printPerson();
person2.printPerson();

