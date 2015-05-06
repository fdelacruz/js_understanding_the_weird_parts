function buildFunctions() {

	var arr = [];

	for (var i = 0; i < 3; i++) {

		arr.push(
			function() {   
				console.log(i);   // function NOT being executed here
			}
		);
	}

	return arr;
}

var fs = buildFunctions();

fs[0](); // 3 because i = 3 at the poing of execution, the end of the loop
fs[1](); // 3 ...   
fs[2](); // 3 ...














function buildFunctions2() {

	var arr = [];

	for (var i = 0; i < 3; i++) {

		arr.push(
			(function(j) { // 0, 1, 2..
				return function() {
					console.log(j);
				}
			}(i)) 
		);
	}

	return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // 0 because j retains its value at its point of execution
fs2[1](); // 1 ...
fs2[2](); // 2 ...
