//closure


// closure working example
var adder = function(passed){	
	
	var addOperation = function(inner){
		var result = passed + inner;
		return result;
	};	
	// return the inner function address	
	return  addOperation;

};

var addwithSeven =  new adder(7);
console.dir(addwithSeven); //[Function: addOperation]
console.log(addwithSeven); //[Function: addOperation]
console.log(addwithSeven(3)); // 10



// closure experiment 1
var adder = function(passed){

	// I did not pass inner variable this time, it printed only 7
	var addOperation = function(){
		var result = passed;
		return result;
	};	
	// return the inner function address	
	return  addOperation;
};

var addwithSeven =  new adder(7);
console.dir(addwithSeven); //[Function: addOperation]
console.log(addwithSeven); //[Function: addOperation]
console.log(addwithSeven(3)); // 7



// closure experiment 2
var adder = function(){

	// I did not use passed variable this time, prnts out 3
	var addOperation = function(inner){
		var result = inner;
		return result;
	};	
	// return the inner function address	
	return  addOperation;
};

var addwithSeven =  new adder(7);
console.dir(addwithSeven); //[Function: addOperation]
console.log(addwithSeven); //[Function: addOperation]
console.log(addwithSeven(3)); // 3

