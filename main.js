const navbar = document.querySelector(".navbar");

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


function search_books() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('book');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        const loadingScreen = document.getElementById('loading-screen');
        const content = document.getElementById('content');
        
        // Duration for which the loading screen is displayed (in milliseconds)
        const loadingDuration = 5000; // 5 seconds

        // Set a timeout to hide the loading screen after the specified duration
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        }, loadingDuration);
    });
});




