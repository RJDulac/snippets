// good use case for do while loop


let condition; //don't need to assign a value

do {
	const userInput = prompt("Enter q to exit");
	if (userInput === 'q') {
		condition = false;
	} else {
		condition = true;
	}
} while(condition);

//another good use case

let totalMoney = 100;

do {
	checkIfCanPurchase(); //will always run the function that checks
} while(totalMoney > 500);

function checkIfCanPurchase() {
	if (totalMoney > 500) {
		console.log("Can purchase :)");
	} else {
		console.log("Cannot purchase :(")
	}
}