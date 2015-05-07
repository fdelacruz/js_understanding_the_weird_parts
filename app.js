var person = { 
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function() {

		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;

	}
};

var logName = function(lang1, lang2) {
	
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-----------');

};

// bind() makes a copy of the function
var logPersonName = logName.bind(person);
logPersonName('es', 'en');

// call() executes the function
logName.call(person, 'en', 'es');

// apply() uses arrays as arguments
logName.apply(person, ['es', 'en']);

// apply() using an IIFE
(function(lang1, lang2) {

	 console.log('Logged: ' + this.getFullName());
	 console.log('Arguments: ' + lang1 + ' ' + lang2);
	 console.log('-----------');
	 
 }).apply(person, ['en', 'es']);

// function borrowing (using apply() or call())
var person2 = {
	firstname: 'Jane',
	lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying (with bind() which makes a copy of the function)
function multiply(a, b) {

	return a*b;
	
}

console.log('-----------');

var multipleByTwo = multiply.bind(this, 2); // permanently setting a to 2
console.log(multipleByTwo(4));

var multipleByTwo = multiply.bind(this, 3); // permanently setting a to 3
console.log(multipleByTwo(4));
