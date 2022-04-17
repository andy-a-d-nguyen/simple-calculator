const display = document.getElementById('result');
const numberButtons = document.querySelectorAll('.number-buttons');
const timesButton = document.getElementById('times-button');
const divideButton = document.getElementById('divide-button');
const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const signButton = document.getElementById('sign-button');
const percentButton = document.getElementById('percent-button');
const equalButton = document.getElementById('equal-button');
const dotButton = document.getElementById('dot-button');
const clearButton = document.getElementById('clear-button');
const previousResult = document.getElementById('previous-result');
let expression = {
	firstOperand: 0,
	secondOperand: 0,
	operator: '',
	result: 0,
	firstOperandString: '',
	secondOperandString: '',
};
let firstNumberClicked = false;
let secondNumberClicked = false;
let operatorClicked = false;

window.onload = () => {
	if (localStorage.getItem('calcResult')) {
		previousResult.innerText = `The previous result was: ${localStorage.getItem(
			'calcResult'
		)}`;
	}
};
numberButtons.forEach((numberButton) => {
	numberButton.addEventListener('click', (event) => {
		if (!operatorClicked) {
			expression.firstOperandString += event.target.innerText;
			display.value = expression.firstOperandString;
		} else {
			expression.secondOperandString += event.target.innerText;
			display.value = expression.secondOperandString;
		}
	});
});

timesButton.addEventListener('click', () => {
	firstNumberClicked = true;
	expression.firstOperand = parseFloat(expression.firstOperandString);
	expression.operator = 'times';
	timesButton.style['background-color'] = 'orange';
	divideButton.style['background-color'] = '';
	plusButton.style['background-color'] = '';
	minusButton.style['background-color'] = '';
	operatorClicked = true;
});

divideButton.addEventListener('click', () => {
	firstNumberClicked = true;
	expression.firstOperand = parseFloat(expression.firstOperandString);
	expression.operator = 'divide';
	timesButton.style['background-color'] = '';
	divideButton.style['background-color'] = 'orange';
	plusButton.style['background-color'] = '';
	minusButton.style['background-color'] = '';
	operatorClicked = true;
});

plusButton.addEventListener('click', () => {
	firstNumberClicked = true;
	expression.firstOperand = parseFloat(expression.firstOperandString);
	expression.operator = 'plus';
	timesButton.style['background-color'] = '';
	divideButton.style['background-color'] = '';
	plusButton.style['background-color'] = 'orange';
	minusButton.style['background-color'] = '';
	operatorClicked = true;
});

minusButton.addEventListener('click', () => {
	firstNumberClicked = true;
	expression.firstOperand = parseFloat(expression.firstOperandString);
	expression.operator = 'minus';
	timesButton.style['background-color'] = '';
	divideButton.style['background-color'] = '';
	plusButton.style['background-color'] = '';
	minusButton.style['background-color'] = 'orange';
	operatorClicked = true;
});

signButton.addEventListener('click', () => {
	if (!operatorClicked) {
		expression.firstOperandString *= -1;
		display.value = expression.firstOperandString;
	} else {
		expression.secondOperandString *= -1;
		display.value = expression.secondOperandString;
	}
});

percentButton.addEventListener('click', () => {
	if (!operatorClicked) {
		expression.firstOperandString /= 100;
		display.value = expression.firstOperandString;
	} else {
		expression.secondOperandString /= 100;
		display.value = expression.secondOperandString;
	}
});

equalButton.addEventListener('click', () => {
	secondNumberClicked = true;
	expression.secondOperand = parseFloat(expression.secondOperandString);
	if (firstNumberClicked && operatorClicked && secondNumberClicked) {
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
		expression.firstOperandString = expression.result;
		expression.secondOperandString = '';
		localStorage.setItem('calcResult', expression.result);
		secondNumberClicked = false;
		operatorClicked = false;
		timesButton.style['background-color'] = '';
		divideButton.style['background-color'] = '';
		plusButton.style['background-color'] = '';
		minusButton.style['background-color'] = '';
	}
});

clearButton.addEventListener('click', () => {
	expression.firstOperand = 0;
	expression.secondOperand = 0;
	expression.operator = '';
	expression.result = 0;
	expression.firstOperandString = '';
	expression.secondOperandString = '';
	firstNumberClicked = false;
	secondNumberClicked = false;
	operatorClicked = false;
	timesButton.style['background-color'] = '';
	divideButton.style['background-color'] = '';
	plusButton.style['background-color'] = '';
	minusButton.style['background-color'] = '';
	display.value = '';
});
