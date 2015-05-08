// Function Constructors
// function Person() {
	
// 	console.log(this); 		 // Object {} being returned
// 	this.firstname = 'John'; // Object {firstname: "John"}
// 	this.lastname = 'Doe'; 	 // Object {firstname: "John", lastname: "Doe"}
// 	console.log('This function is invoked');
	
// 	// if I return something else the original Object doesn't get returned
// 	// return { greeting: 'I got in the way!' }; // Object {greeting: "I got in the way!"}
// }

// var john = new Person();
// console.log(john);

// var jane = new Person({
// 	firstname: 'Jane',
// 	lastname: 'Doe'
// });
// console.log(jane);

// Setting parameters 
function Person(firstname, lastname) {
	
	console.log(this); 		 
	this.firstname = firstname; 
	this.lastname = lastname; 	 
	console.log('This function is invoked');
	
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);
