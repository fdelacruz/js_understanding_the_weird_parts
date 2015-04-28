var person = new Object();

person['firstname'] = 'Francisco';
person['lastname'] = 'De La Cruz';

var firstNameProperty = 'firstname';

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = '111 Main St.';
person.address.city = 'New York';
person.address.state = 'NY';

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);
