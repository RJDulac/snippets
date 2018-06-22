
const intialString = "How are you?";

function stringSplitter (str=initialString) { //default value in parameter
	return str.split(" "); 
}

console.log(stringSplitter("I am fine"));