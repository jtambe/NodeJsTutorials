
// an object
var obj = {currentSum :2}; 

// a function not associated with object or not a part of template of above object
var addIntoCurrentSum = function(value1, value2, value3){ 
	
	return this.currentSum + value1 + value2 + value3;
}

var args = [10,20,30];
// how to use call
// call obj with function
//console.log(addIntoCurrentSum.call(obj, 10));
console.log(addIntoCurrentSum.call(obj, args)); //args doesn't work
console.log(addIntoCurrentSum.call(obj, 10,20,30));

// how to use apply
// apply obj with function name, same as call
//console.log(addIntoCurrentSum.apply(obj, 10));
console.log(addIntoCurrentSum.apply(obj, args));

// just bind obj and then call function
var objectAfterBound = addIntoCurrentSum.bind(obj)
//console.log(objectAfterBound(10));
console.log(objectAfterBound(args)); // args doesn't work
console.log(objectAfterBound(10,20,30));
