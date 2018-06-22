

const purpleDivs = document.querySelectorAll(".purple");



setInterval (() => {
	for(const prop of purpleDivs) {
		prop.classList.toggle("foo"); //turns on and off the class foo
	}
}, 3000);