console.log(3 < 2 < 1); // true, left-associativity 
						// (false < 1) -> true, false coerced to be 0
						// 0 < 1 = true

var a = 0;
var b = false;

if (a === b) {          // does not coerce
	console.log('They are equal!');
} else {
	console.log('Nope, not equal.');
}
