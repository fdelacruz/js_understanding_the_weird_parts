function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	};

}

// greet('Hi')('Tony');
var sayHi = greet('Hi'); // Same thing
sayHi('Tony');
