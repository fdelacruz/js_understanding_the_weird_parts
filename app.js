var objectLiteral = {
	firstname: 'Mary',
	isAProgrammer: true
};

console.log(JSON.stringify(objectLiteral));

var jsonvalue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonvalue);
