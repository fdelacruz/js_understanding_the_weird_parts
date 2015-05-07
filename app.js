function sayHiLater() {
	
	var greeting = 'Hi!';

	setTimeout(function() {
		
		console.log(greeting);

	}, 3000);

}

sayHiLater();


function tellMeWhenDone(cb) {

	console.log(1); // some work
	console.log(2); // some work
	console.log(3); // some work

	cb(); // the 'callback', it runs the function I give it
}

tellMeWhenDone(function() {
	console.log('I am done!');
});

tellMeWhenDone(function() {
	console.log('All done!');
});
