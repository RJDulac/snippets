//set timeout

function looper(value ) {
	setTimeout(function() {
		console.log(value);
	}, value * 1000); //times value so they print out one at a time
}

for(var i = 0; i < 10; i++) {
	looper(i); //capture i at any given momement during execution of loop
}

//es6 approach

for(let i = 0; i < 10; i++) { //let is block scopped so don't need function to capture value
	setTimeout(() => {
		console.log(i);
	}, i * 1000);
}