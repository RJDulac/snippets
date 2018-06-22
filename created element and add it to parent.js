const creationDiv = document.getElementById("created");//id of div in html being appended 

const newElement = document.createElement("P");
newElement.innerText = "I was created by Science!";

creationDiv.appendChild(newElement);