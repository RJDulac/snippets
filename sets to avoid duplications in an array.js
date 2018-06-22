//sets to avoid duplications in an array
const orginalArray = ["Chris", "Chris", "Jane", "Sally", "Billy", "Billy", "Bob"];

const uniqueNameSet = new Set(orginalArray);

for(const n of uniqueNameSet) {
	console.log(n);
}