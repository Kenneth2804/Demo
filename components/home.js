function searchButton() {
	let input, filter, container, buttons, button, i, txtValue;

	input = document.getElementById("search-bar");
	filter = input.value.toUpperCase();
	container = document.getElementById("button-container");
	buttons = container.getElementsByTagName("button");

	for ( i = 0; i < buttons.length; i++) {
		button = buttons[i];
		txtValue = button.textContent || button.innerText;
		if (txtValue.toUpperCase().indexOf(filter)>-1) {
			button.style.display = "";
		}else{
			button.style.display = "none"
		}
	}
}