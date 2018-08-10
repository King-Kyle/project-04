//SEARCH FUNCTION

//links to the search input and image data in HTML.
var imgSearch = document.getElementById("myInput");
var imgDataTitle = document.querySelectorAll("a[data-lc-caption]");
//listens for keyboard input then performs the function
imgSearch.addEventListener("keyup", function(filtering){
//converts search input to uppercase values
	let filtered = imgSearch.value.toUpperCase();
//"i" is less than the length of the image data and increments through it
	for (var i = 0; i < imgDataTitle.length; i++){
//increments through image data and retrieves data on input
		var title = imgDataTitle[i].getAttribute("data-lc-caption");
//displays image based on image data
		if (title.toUpperCase().includes(filtered)) {
			imgDataTitle[i].style.display = "inline";//if the input is Caps or not display image
		} else {
			imgDataTitle[i].style.display = "none";//else dont display anything
		}
	}
});
