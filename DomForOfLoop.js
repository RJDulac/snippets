const membersUL = document.getElementById("members");
const allMemberNames = membersUL.getElementsByTagName("LI");

for(let prop of allMemberNames) {
	if (prop.innerText === "Bob") {
		prop.innerText = "Not Bob";
	}
}