var person = {
	firstname: 'Default',
	lastname: 'Default',
	getfullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
};

var john = {
	firstname: 'John',
	lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__  = person;
console.log(john.getfullName());
console.log(john.firstname);

var jane = {
	firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getfullName());
