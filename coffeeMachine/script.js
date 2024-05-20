document.getElementById("brew-button").addEventListener("click", function () {
	const coffee = document.querySelector(".coffee");
	coffee.style.height = "100%";
	setTimeout(() => {
		coffee.style.height = "0";
	}, 3000); // Adjust the time to keep the coffee in the cup for a certain duration
});
