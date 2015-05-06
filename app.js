function getPerson() {
	// putting the first curly bracket in the next line results in an undefined
	// return because of automatic semicolon insertion	
	return {
	// {
		firstname: 'Tony'
	};
}

console.log(getPerson());
