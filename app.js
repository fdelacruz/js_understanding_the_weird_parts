var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {

	arr2.push(arr1[i] * 2); // double

}

console.log(arr2);

// functional version
function mapForEach(arr, fn) {

	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
		);
	}

	return newArr;
}

var arr3 = mapForEach(arr1, function(item) {
	return item * 2; // double
});

console.log(arr3);

// do something different
var arr4 = mapForEach(arr1, function(item) {
	return item > 2; // boolean
});

console.log(arr4);

// another example
var checkPastLimit = function(limiter, item) {
	return item > limiter;
}

var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr5);

// make it so the function just takes the limiter
var checkPastLimitSimplified = function(limiter) {
	return function(limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
};

var arr6 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr6);

// underscore.js
var arr7 = _.map(arr1, function(item) {
	return item * 3;
});
console.log(arr7);

var arr8 = _.filter([2, 3, 4, 5, 6, 7], function(item) {
	return item % 2 === 0;
});
console.log(arr8);
