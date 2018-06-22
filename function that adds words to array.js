
testArray = ["Change", "Great", "Fail", "Balls"]
const wordAdder = (word) => {
	const wordContainer = [];
	word.forEach((w) => {
		const added = w + " " + "Placeholder";
		wordContainer.push(added);
	});
	return wordContainer;
}

console.log(wordAdder(testArray));