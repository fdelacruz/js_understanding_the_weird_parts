String.prototype.isLengthGreaterThan = function(limit) {
	return this.length > limit;
};

console.log('John'.isLengthGreaterThan(2)); //  converted string primitive to String object

Number.prototype.isPositive = function() {
	return this > 0;
};

// console.log(1.isPositive()); // Error: number primitives don't get converted

var a = new Number(1);
console.log(a.isPositive());
