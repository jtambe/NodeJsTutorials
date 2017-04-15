

// factory pattern  in javascripting

var peopleFactory = function(name, age, state)
{
	var temp = {};

	temp.age = age;
	temp.name = name;
	temp.state = state;

	temp.printPerson = function(){
		console.log(this.name + ", " + this.age + ", " + this.state )
	}

	return temp;
}

// temp is like a factory in this example
var person1 = peopleFactory('jaon', 89, 'CA');
var person2 = peopleFactory('juan', 87, 'CA');
person1.printPerson();
person2.printPerson();

