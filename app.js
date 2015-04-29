var Francisco = { 
	firstname: 'Francisco', 
	lastname: 'De La Cruz',
	address: {
		street: '111 Main St.',
		city: 'New York',
		state: 'NY'
	}
};

function greet(person) {
	console.log('Hi ' + person.firstname);
}

greet(Francisco);

greet({
	firstname: 'Mary',
	lastname: 'Doe'
});
