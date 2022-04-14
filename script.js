const display = document.getElementById('result');
const numberButtons = document.querySelectorAll('.number-buttons');
const operatorButtons = document.querySelectorAll('.operator-buttons');
const operatorMatch = /x|\/|\+|-/;
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
			display.value += expression.secondOperand;
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

operatorButtons.forEach((operatorButton) => {
	operatorButton.addEventListener('click', () => {
		if (firstNumberClicked) {
			if (operatorButton.classList.contains('times-button')) {
				expression.operator = 'times';
				if (!operatorClicked) {
					display.value += 'x';
				} else {
					display.value = display.value.replace(operatorMatch, 'x');
				}
			} else if (operatorButton.classList.contains('divide-button')) {
				expression.operator = 'divide';
				if (!operatorClicked) {
					display.value += '/';
				} else {
					display.value = display.value.replace(operatorMatch, '/');
				}
			} else if (operatorButton.classList.contains('plus-button')) {
				expression.operator = 'plus';
				if (!operatorClicked) {
					display.value += '+';
				} else {
					display.value = display.value.replace(operatorMatch, '+');
				}
			} else {
				expression.operator = 'minus';
				if (!operatorClicked) {
					display.value += '-';
				} else {
					display.value = display.value.replace(operatorMatch, '-');
				}
			}
			operatorClicked = true;
			console.log(expression.operator);
		}
	});
});
