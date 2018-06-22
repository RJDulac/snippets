const iceCreams = ["vanilla", "chocolate", "rocky road", "strawberry"];

function iceCreamLooper(arr, type) {
	for(var i = 0; i< arr.length; i++) {
		if (arr[i] === type) {
			console.log(arr[i] " " + "is at position: " + i);
		}
	}
}

iceCreamLooper(iceCreams, "vanilla")