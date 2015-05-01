greet(); 								

function greet() {                      // function statements get hoisted
	console.log('hi');
}

// anonymousGreet(); 					

var anonymousGreet = function() {      //  function expressions don't get hoisted
	console.log('hi');
};

anonymousGreet();

function log(a) {
	a();
}

log(function() {
	console.log('hi');
});
