const data = [
	{code: null},
	{
		code: `<label for="userText">Enter number:</label>
    <input class='peleks' value='2' id='input1' type="number">
    <label for="userLetter">Enter number:</label>
    <input class='peleks' value='4' id='input2' type="number">`,
	},
	{
		code: `<label for="userText">Enter numbers:</label>
    <input class='peleks' value='1,2,3,4,6,8,3,2' id='input1' type="text">`,
	},
	{
		code: `<label for="userText">Enter something:</label>
    <input class='peleks' value='hello' id='input1' type="text">`,
	},
	{
		code: `<label for="userText">Enter something:</label>
    <input class='peleks' value='hello' id='input1' type="text">`,
	},
	{
		code: `<label for="userText">Enter array of numbers:</label>
    <input class='peleks' value='1,2,3,4,6,8,3,2' id='input1' type="text">`,
	},
	{
		code: `<label for="userText">Enter number:</label>
    <input class='peleks' value='7' id='input1' type="number" max="100">`,
	},
	{
		code: `<label for="userText">Enter number:</label>
    <input class='peleks' value='7' id='input1' type="number">`,
	},
	{
		code: `<label for="userText">Enter number:</label>
    <input class='peleks' value='7' id='input1' type="number" min="1">`,
	},
	{
		code: `<label for="userText">Enter text:</label>
    <input class='peleks' value='Hello, my name is Alex.' id='input1' type="text"><label><input type="radio" id="case1" name="option" value="lower" checked>Lower</label><label><input type="radio" id="case2" name="option" value="upper">Upper</label><label><input type="radio" id="case1" name="option" value="normal" checked>Normal</label>`,
	},
	{
		code: `<label for="userText">Enter array of numbers:</label>
    <input class='peleks' value='1,2,3,4,6,8,3,2' id='input1' type="text">`,
	},
];

// Select test by <select> in html
const selectTest = testIndex => {
	const htmlElement = document.getElementsByClassName('InputsArea')[0]; // InputsArea for inputs adding

	htmlElement.innerHTML = ''; // refresh

	if (testIndex >= 0 && testIndex < data.length) {
		const container = document.createElement('div'); // create div tag
		container.className = 'InputsArea'; // do class name
		container.innerHTML = data[testIndex].code; // add data (inputs, labels)
		htmlElement.appendChild(container); // append to the div tag
	}

	return;
};

// Test solving
const solve = () => {
	const testNum = parseInt(document.getElementsByTagName('select')[0].value); // get selected test index
	if (testNum <= 0) {
		result('Error, please choose correct exercise', false); // error
		return;
	}
	// basic variables for work
	const input1 = document.getElementById('input1').value; // each time we have at least one input, therefore we can get it's value here
	const number = parseInt(input1); // in our cases (switch - case) we have at least one case with numbers
	const string = input1; // string variable
	const numbersArray = input1.split(',').map(Number); // numbers array after mapping
	// conditional statements
	switch (testNum) {
		// Sum
		case 1:
			const num1 = parseFloat(input1); // float number 1
			const num2 = parseFloat(document.getElementById('input2').value); // float number 2

			const sumNumbers = sum(num1, num2); // sum two numbers

			result(`${num1} + ${num2} = ${sumNumbers}`, true); // send result
			break;

		// Find maximum number
		case 2:
			const maxNum = findMaxNumber(numbersArray); // find maximum number

			result(`The biggest number of ${JSON.stringify(numbersArray)} array = ${maxNum}`, true); // send result
			break;

		// Palindrome
		case 3:
			const checkPalindrome = palindrome(string); // palindrome checking

			result(checkPalindrome[0], checkPalindrome[1]); // send result
			break;

		// Reverse
		case 4:
			const reverseText = reverseString(string); // reverse text

			result(reverseText, true); // send result
			break;

		// Even numbers
		case 5:
			const evenNumbersArray = evenNumber(numbersArray); // do even numbers array

			result(evenNumbersArray[0], evenNumbersArray[1]); // send result
			break;

		// Factorial
		case 6:
			const doFactorial = factorial(number); // do factorial of a number

			result(doFactorial[0], doFactorial[1]); // send result
			break;

		// Prime number
		case 7:
			const primeNum = checkPrime(number); // do prime number checking

			result(primeNum[0], primeNum[1]); // send result
			break;

		// Fibonacci sequence
		case 8:
			const FibonacciSequence = Fibonacci(number); // do Fibonacci sequence

			result(FibonacciSequence, true); // send result
			break;

		// Case convert
		case 9:
			const convertedText = caseConvert(string); // change all chars case

			result(convertedText[0], convertedText[1]); // send result
			break;

		// Statistics average
		case 10:
			const averageValues = statisticsAverage(numbersArray); // do statistics average values

			result(averageValues[0], averageValues[1]);
	}
};

// Write result in a textarea
const result = (text, isTrue) => {
	const field = document.getElementsByTagName('textarea')[0]; // html field for result
	field.value = `>> ${text}`; // print result in a textarea
	if (isTrue) {
		field.style.color = 'green'; // valid data
	} else {
		field.style.color = 'red'; // invalid data
	}

	return;
};

//! Area for solving ///////////////////////////////////////////////////////////////////

// Test 1
const sum = (number1, number2) => {
	return number1 + number2; // sum two numbers
};

// Test 2
const findMaxNumber = array => {
	let maxNum = 0; // start num

	for (let i = 0; i < array.length; i++) {
		if (array[i] > maxNum) maxNum = array[i];
	}

	return maxNum;
};

// Test 3
const palindrome = text => {
	reversedText = text.split('').reverse().join(''); // reverse text
	if (reversedText == text) return [`Your text <${text}> is a palindrome`, true]; // if is palindrome

	return [`Your text <${text}> is not a palindrome`, false];
};

// Test 4
const reverseString = text => {
	reversedText = text.split('').reverse().join(''); // reverse text
	return `Reversed string: ${reversedText}`;
};

// Test 5
const evenNumber = array => {
	let newArray = []; // array for even numbers
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0) {
			newArray.push(array[i]); // if number is even => push it an array
		}
	}

	if (newArray.length <= 0) return ['Your array of numbers has not even numbers', false];

	return [`Array of even numbers: ${JSON.stringify(newArray)}`, true];
};

// Test 6
const factorial = number => {
	let result = 1; // minimum number
	const initialNum = number; // number for result showing
	if (number == 0) return [`!${number} = 1`, true];
	else if (number < 0) return [`!${number} cannot be less than 0`, false];
	else {
		// Multiply result to number before number equals 1
		// For example we have number = 5;
		// Steps: 5, 4, 3, 2, 1 => number (values)
		// Multiplying all of this
		while (number != 1) {
			result *= number;
			number -= 1;
		}
	}

	return [`!${initialNum} = ${result}`, true];
};

// Test 7
const checkPrime = number => {
	if (number % 2 != 0 && number > 1) return [`${number} is a prime`, true];
	else if (number == 2) return [`${number} is a prime`, true];

	return [`${number} is not a prime`, false];
};

// Test 8
const Fibonacci = number => {
	let sequence = [0, 1]; // Initial data

	// [0, 1] => [0, 1, (0 + 1)] - sum latest two values before it's equals number (user input value)
	while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= number) {
		sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]); // push in an array
	}

	return sequence;
};

// Test 9
const caseConvert = text => {
	const options = document.querySelectorAll('input[name="option"]'); // all options from html DOM
	let selectedOption; // variable for selectedOption
	let result = ''; // variable for result

	options.forEach(option => {
		if (option.checked) {
			// if option is checked
			selectedOption = option.value; // add this option value to selectedOption
		}
	});

	if (selectedOption == 'upper') {
		result = [`Your converted text: ${text.toUpperCase()}`, true]; // uppercase
	} else if (selectedOption == 'lower') {
		result = [`Your converted text: ${text.toLowerCase()}`, true]; // lowercase
	} else if (selectedOption == 'normal') {
		result = [`Your converted text: ${text}`, true]; // normal
	} else {
		result = [`Your text has some errors, please check it out`, false]; // error
	}

	return result;
};

// Test 10
const statisticsAverage = array => {
	if (array.length <= 1) {
		return ['Please enter some numbers (min: 2)', false];
	}
	const increasingArray = array.sort(); // array (a - b) sequence
	const decreasingArray = array.sort((a, b) => b - a); // array (b - a) sequence
	let arraySum = 0; // all array numbers sum
	let arrayMultiply = 1; // all array number multiply
	let arrayQuadraticSum = 0;

	for (let x = 0; x < array.length; x++) {
		arraySum += array[x]; // add num to arraySum
		arrayMultiply *= array[x]; // multiply num to arrayMultiply
		arrayQuadraticSum += array[x] ** 2;

		if (isNaN(array[x])) {
			return ['Your array of numbers has some errors, please check it out', false]; // return error
		}
	}

	return [`Increasing: ${JSON.stringify(increasingArray)}\n>> Decreasing: ${JSON.stringify(decreasingArray)}\n>> Sum: ${arraySum}\n>> Multiply: ${arrayMultiply}\n>> Average algebraic: ${arraySum / array.length}\n>> Average geometric: ${Math.pow(arrayMultiply, 1 / array.length).toFixed(2)}\n>> Average quadratic: ${Math.sqrt(arrayQuadraticSum / array.length).toFixed(2)}`, true]; // return result
};
