// IIFE
(function(global, name) {

	var greeting = 'Hello';
	global.greeting = 'Hello'; // Override the Global greeting
	console.log(greeting + ' ' + name);

}(window, 'John')); // IIFE Execution Context

console.log(greeting); // Global Execution Context
