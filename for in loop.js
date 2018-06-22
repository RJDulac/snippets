//for in loop

//loops through an object's properties in arbitary order.
//stays the same so not enough for random generator

//sorts numbers and then alphabetically --instructor is wrong it's not arbitary.

const users = {a: "sally", 2: "Billy", 3: "Ashley", 4: "Timmy"};

for(let prop in users) {
	console.log(prop);
	console.log(users[prop]);
}