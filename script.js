const display = document.getElementById('result');
const numberButtons = document.querySelectorAll('.number-buttons');
const timesButton = document.getElementById('times-button');
const divideButton = document.getElementById('divide-button');
const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const signButton = document.getElementById('sign-button');
const percentButton = document.getElementById('percent-button');
let expression = {
	firstOperand: 0,
	secondOperand: 0,
	operator: '',
	result: 0,
};
let firstNumberClicked = false;
let secondNumberClicked = false;
let operatorClicked = false;
numberButtons.forEach((numberButton) => {
	numberButton.addEventListener('click', (event) => {
		if (!firstNumberClicked) {
			expression.firstOperand = parseInt(event.target.innerText);
			firstNumberClicked = true;
			display.value = expression.firstOperand;
			console.log(`first operand: ${expression.firstOperand}`);
		} else if (firstNumberClicked && !secondNumberClicked) {
			expression.secondOperand = parseInt(event.target.innerText);
			secondNumberClicked = true;
			display.value = expression.secondOperand;
			console.log(`second operand: ${expression.secondOperand}`);
		}

		if (firstNumberClicked && secondNumberClicked) {
			switch (expression.operator) {
				case 'times':
					expression.result =
						expression.firstOperand * expression.secondOperand;
					break;
				case 'divide':
					expression.result =
						expression.firstOperand / expression.secondOperand;
					break;
				case 'plus':
					expression.result =
						expression.firstOperand + expression.secondOperand;
					break;
				default:
					expression.result =
						expression.firstOperand - expression.secondOperand;
					break;
			}
			display.value = expression.result;
			expression.firstOperand = expression.result;
			secondNumberClicked = false;
			console.log(expression.result);
		}
	});
});

timesButton.addEventListener('click', () => {
	if (firstNumberClicked) {
		expression.operator = 'times';
		timesButton.style['background-color'] = 'orange';
		divideButton.style['background-color'] = '';
		plusButton.style['background-color'] = '';
		minusButton.style['background-color'] = '';
		operatorClicked = true;
	}
});

divideButton.addEventListener('click', () => {
	if (firstNumberClicked) {
		expression.operator = 'divide';
		timesButton.style['background-color'] = '';
		divideButton.style['background-color'] = 'orange';
		plusButton.style['background-color'] = '';
		minusButton.style['background-color'] = '';
		operatorClicked = true;
	}
});

plusButton.addEventListener('click', () => {
	if (firstNumberClicked) {
		expression.operator = 'plus';
		timesButton.style['background-color'] = '';
		divideButton.style['background-color'] = '';
		plusButton.style['background-color'] = 'orange';
		minusButton.style['background-color'] = '';
		operatorClicked = true;
	}
});

minusButton.addEventListener('click', () => {
	if (firstNumberClicked) {
		expression.operator = 'minus';
		timesButton.style['background-color'] = '';
		divideButton.style['background-color'] = '';
		plusButton.style['background-color'] = '';
		minusButton.style['background-color'] = 'orange';
		operatorClicked = true;
	}
});

signButton.addEventListener('click', () => {
	if (firstNumberClicked) {
		expression.firstOperand *= -1;
		display.value = expression.firstOperand;
	} else if (firstNumberClicked && operatorClicked && secondNumberClicked) {
		expression.secondOperand *= -1;
		display.value = expression.secondOperand;
	}
});

percentButton.addEventListener('click', () => {
	if (firstNumberClicked) {
		expression.firstOperand /= 100;
		display.value = expression.firstOperand;
	} else if (firstNumberClicked && operatorClicked && secondNumberClicked) {
		expression.secondOperand /= 100;
		display.value = expression.secondOperand;
	}
});
