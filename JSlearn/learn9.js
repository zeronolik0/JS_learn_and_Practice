function first() {
	setTimeout( function() {
		console.log("I'm the first!");
	}, 1000);
}

function second() {
	console.log("I'm the second!");
}

first();
second();