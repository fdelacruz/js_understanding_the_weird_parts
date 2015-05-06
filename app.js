// function statement/declaration
function greet(name) {
	console.log('Hello ' + name);
}
greet('John');

// using a function expression
var greetFunc = function(name) {
	console.log('Hello ' + name);
};
greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {

	return 'Hello ' + name;

}('John');

console.log(greeting);

// stand-alone Immediately Invoked Function Expression (IIFE)
var firstname = 'John';

(function(name) {

	var greeting = 'Hello';
	console.log(greeting + ' ' + name);

}(firstname)); // classic example of an IIFE
