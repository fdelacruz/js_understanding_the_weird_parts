Array.prototype.myCustomFeature = 'Cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
	console.log(prop + ': ' + arr[prop]);
}
// The for..in loop will iterate over all enumerable properties of the object
// itself and those the object inherits from its constructor's prototype.
// 0: John
// 1: Jane
// 2: Jim
// myCustomFeature: Cool! // inherited property

for (var i = 0; i < arr.length; i++) {
	console.log(i + ': ' + arr[i]);
}
// The regular for loop enumerates only the elements of the array.
// 0: John
// 1: Jane
// 2: Jim
