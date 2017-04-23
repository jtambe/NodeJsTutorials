

var obj = {a: 1, b: 2, c: {a: 1, b: 2}};

function walk(obj) {

  for (var key in obj) {
     
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      console.log(val);
      walk(val);
    }
    
  }
}


walk(obj);