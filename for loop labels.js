// nested for loop with labels

console.log("Starting loop!");
outerLoop:
for(let i = 0; i < 10; i++) {
	console.log("Loop #" + i);
	innerLoop:
	for (let a = 0; a < 10; a++) {
		console.log("Inner Loop #" + a);
		if (a === 3) {
			break innerLoop;
		}
		if (i == 5) {
			break outerLoop;
		}
	}
}
console.log("Finished loop");