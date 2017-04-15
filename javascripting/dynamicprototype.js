

// prototype pattern  in javascripting
var peopleDynamicProto = function(name, age, state)
{
	this.age = age;
	this.name = name;
	this.state = state;
	// mix of constructor by brining in properties in constructor


	// if I cant find this function then create fucntion within prototype space
	// This means that function will be created for first object invocation but not for subsequenct invocation of objects
	if( typeof this.printPerson !== 'function'){
			
			peopleDynamicProto.prototype.printPerson = function(){
			console.log(this.name + ", " + this.age + ", " + this.state )
			};
	}

};


var person1 = new peopleDynamicProto('june',23, 'CA'); 
var person2 = new peopleDynamicProto('jessica', 33, 'VA'); 

person1.printPerson();
person2.printPerson();

