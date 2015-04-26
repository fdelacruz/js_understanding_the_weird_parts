function b() {
	var myVar;
	console.log(myVar); 
}

function a() {
	var myVar = 2;
	console.log(myVar); 
	b();                // undefined
}

var myVar = 1;
console.log(myVar);     // 1
a();   				    // 2
console.log(myVar);     // 1
