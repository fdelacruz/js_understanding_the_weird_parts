// function b() {
// 	console.log(myVar);     // 1
// }

function a() {

	function b() {
		console.log(myVar); // 2
	}

	var myVar = 2;          // a() Execution Context
	b();
}

var myVar = 1;              // Global Execution Context 
a();
