const numberButtons = document.querySelectorAll('.number-buttons');
const display = document.querySelector('input');
const equalsButton = document.querySelector('#equals-button');
numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		display.value = button.textContent;
		console.log(display.textContent);
	});
});
equalsButton.addEventListener('click', () => {
	console.log(display.value);
});
