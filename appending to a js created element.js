const myFavIceCreams = ["vanilla", "rocky road", "strawberry", "chocolate"];

const creationDiv = document.getElementById("created"); //created is an id for a div element in html

const newElement = document.createElement("div");

//append to div we created
const newUL = document.createElement("UL");
newElement.appendChild(neUL); //appends to newElement div

console.log(newElement)

const newUL = document.createElement("UL");

//for loop to go through array and add li -- good for list items stored in array
for(let i=0; i < myFavIceCreams.length; i++) {
	const newLI = document.createElement("LI");
	newLI.innerText = myFavIceCreams[i]; //adds text from array
	newUL.appendChild(newLI);
}


const newLI = document.createElement("LI")
newLI.innerText = myFavIceCreams[0]; //try putting random here
newUL.appendChild(newLI);
newElement.appendChild(newUL);
creationDiv.appendChild(newElement); //adds to element that has created id