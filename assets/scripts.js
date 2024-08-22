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
	{
		code: `<label for="userText">Enter text:</label>
    <input class='peleks' value='Something...' id='input1' type="text">`,
	},
	{
		code: `<p>Click the button to get current date</p><button type="button" onclick="solve(true)">Stop time</button>`,
	},
	{
		code: `<label for="userText">Enter number:</label>
    <input class='peleks' value='123' id='input1' type="number" min="1">`,
	},
	{
		code: `<label for="userText">Enter array of numbers:</label>
    <input class='peleks' value='[2, [10], 3, [12], 4, [14, 16, 18]]' id='input1' type="text">`,
	},
	{
		code: `<label for="userText1">Enter k:</label>
    <input class='peleks' value='2' id='input1' type="number"><label for="userText2">Enter n:</label>
    <input class='peleks' value='3' id='input2' type="number">`,
	},
	{
		code: `<label for="userText1">Enter k:</label>
    <input class='peleks' value='2' id='input1' type="number"><label for="userText2">Enter n:</label>
    <input class='peleks' value='3' id='input2' type="number">`,
	},
	{
		code: `<label for="userText">Enter n:</label>
    <input class='peleks' value='4' id='input1' type="number">`,
	},
	{
		code: `<label for="userText">Enter array of numbers with 0:</label>
    <input class='peleks' value='0, 8, 2, 0, 1' id='input1' type="text">`,
	},
	{
		code: `<label for="userText">Enter array:</label>
    <input class='peleks' value='AB' id='input1' type="text">`,
	},
	{
		code: `<label for="input1">Enter a:</label>
    <input class='peleks' value='2' id='input1' type="number"><label for="input2">Enter b:</label>
    <input class='peleks' value='4' id='input2' type="number"><label for="input3">Enter c:</label>
    <input class='peleks' value='6' id='input3' type="number">`,
	},
];

let dateInterval = null; // initial date

// Select test by <select> in html
const selectTest = testIndex => {
	const htmlElement = document.getElementsByClassName('InputsArea')[0]; // InputsArea for inputs adding
	const errorText = document.querySelector('.error'); // error text

	htmlElement.innerHTML = ''; // refresh

	if (testIndex > 0 && testIndex < data.length) {
		const container = document.createElement('div'); // create div tag
		container.className = 'InputsArea'; // do class name
		container.innerHTML = data[testIndex].code; // add data (inputs, labels)
		htmlElement.appendChild(container); // append to the div tag
		errorText.style.color = 'green'; // not error color
		errorText.innerHTML = 'Valid exercise'; // not error text
		result('', true); // refresh textarea
	} else {
		errorText.style.color = 'red'; // error color
		errorText.innerHTML = 'Error: invalid exercise'; // error text
	}

	return;
};

// Test solving
const solve = x => {
	const testNum = parseInt(document.getElementsByTagName('select')[0].value); // get selected test index
	if (testNum <= 0) {
		document.getElementsByClassName('error')[0].innerHTML = 'Error: invalid exercise';
		result('Error, please choose correct exercise', false); // error
		return;
	}
	// basic variables for work
	const input1 = document.getElementById('input1')?.value; // each time we have at least one input, therefore we can get it's value here
	const number = parseInt(input1); // in our cases (switch - case) we have at least one case with numbers
	const string = input1; // string variable
	const number2 = parseInt(document.getElementById('input2')?.value);
	const number3 = parseInt(document.getElementById('input3')?.value);
	const numbersArray = input1?.split(',').map(Number); // numbers array after mapping
	// conditional statements
	switch (testNum) {
		// Sum
		case 1:
			const num1 = parseFloat(input1); // float number 1
			const num2 = parseFloat(document.getElementById('input2').value); // float number 2

			const sumNumbers = sum(num1, num2); // sum two numbers

			result(sumNumbers[0], sumNumbers[1]); // send result
			break;

		// Find maximum number
		case 2:
			const maxNum = findMaxNumber(numbersArray); // find maximum number

			result(maxNum[0], maxNum[1]); // send result
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

			result(FibonacciSequence[0], FibonacciSequence[1]); // send result
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
			break;

		// Text analysis
		case 11:
			const analysisResult = textAnalysis(string);

			result(analysisResult[0], analysisResult[1]);
			break;

		// Get current date (dd/mm/yyyy)
		case 12:
			if (x === true && dateInterval) {
				// Clear the interval if x is true and dateInterval exists
				clearInterval(dateInterval);
				dateInterval = null; // reset the interval ID
				result('Time is stopped', true);
				return;
			}

			let nowDate;
			dateInterval = setInterval(() => {
				nowDate = getDate();
				result(nowDate[0], nowDate[1]);
			}, 1000);
			break;

		// Armstrong number
		case 13:
			const solveArmstrong = Armstrong(number);

			result(solveArmstrong[0], solveArmstrong[1]);
			break;

		// Nested array
		case 14:
			const nestedValues = nestedArray(JSON.parse(string));

			result(nestedValues[0], nestedValues[1]);
			break;

		// Combination
		case 15:
			const combinations = combination(number, number2);

			result(combinations[0], combinations[1]);
			break;

		// Combination
		case 16:
			const placements = placement(number, number2);

			result(placements[0], placements[1]);
			break;

		// Full combinations
		case 17:
			const fullCombs = factorial(number);

			result(fullCombs[0], fullCombs[1]);
			break;

		// All zeros place in the end of array
		case 18:
			const placeZeros = arrayZeros(numbersArray);

			result(placeZeros[0], placeZeros[1]);

		// Permutation
		case 19:
			const combs = permutation(string);

			result(combs[0], combs[1]);

		// Quadratic equation
		case 20:
			const equation = quadraticEquation(number, number2, number3);

			result(equation[0], equation[1]);
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

//! Area for solving ================================================================================================================================================================================================================================================

// Test 1
const sum = (number1, number2) => {
	if (isNaN(number1) || isNaN(number2)) {
		return ['Please enter correct numbers in inputs', false];
	}
	return [`${number1} + ${number2} = ${number1 + number2}`, true]; // sum two numbers
};

// Test 2
const findMaxNumber = array => {
	if (array.length <= 1) return ['Please enter more numbers', false];

	let maxNum = 0; // start num

	for (let i = 0; i < array.length; i++) {
		if (array[i] > maxNum) maxNum = array[i];
	}

	return [`The biggest number of ${JSON.stringify(array)} array = ${maxNum}`, true];
};

// Test 3
const palindrome = text => {
	reversedText = text.split('').reverse().join(''); // reverse text
	if (reversedText == text) return [`Your text <${text}> is a palindrome`, true]; // if is palindrome

	return [`Your text <${text}> is not a palindrome`, false];
};

// Test 4
const reverseString = text => {
	const textArray = text.split(''); // do array of text
	let reversedText = []; // initial result array (reversed text by FOR loop)

	for (let x = textArray.length - 1; x >= 0; x--) {
		reversedText.push(textArray[x]); // add element into reversed text
	}

	return `Reversed string: ${reversedText.join('')}`;
};

// Test 5
const evenNumber = array => {
	if (array.length <= 0) return ['Your array of numbers has not even numbers', false];

	let newArray = []; // array for even numbers
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0) {
			newArray.push(array[i]); // if number is even => push it an array
		}
	}

	return [`Array of even numbers: ${JSON.stringify(newArray)}`, true];
};

// Test 6
const factorial = number => {
	if (isNaN(number)) {
		return [`Please enter only number`, false];
	}

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
	if (number > 5000 || number <= 0) {
		return ['Please enter number which is not bigger than 5000', false];
	}
	let sequence = [0, 1]; // Initial data

	// [0, 1] => [0, 1, (0 + 1)] - sum latest two values before it's equals number (user input value)
	while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= number) {
		sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]); // push in an array
	}

	return [sequence, true];
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
	const increasingArray = [...array].sort(); // array (a - b) sequence
	const decreasingArray = [...array].sort((a, b) => b - a); // array (b - a) sequence
	let arraySum = 0; // all array numbers sum
	let arrayMultiply = 1; // all array number multiply
	let arrayQuadraticSum = 0;

	for (let x = 0; x < array.length; x++) {
		arraySum += array[x]; // add num
		arrayMultiply *= array[x]; // multiply num
		arrayQuadraticSum += array[x] ** 2; //do quadratic sum

		if (isNaN(array[x])) {
			return ['Your array of numbers has some errors, please check it out', false]; // return error
		} else if (array[x] < 0) {
			return ['Numbers cannot be less than 0, please check it out', false];
		}
	}

	return [`Increasing: ${JSON.stringify(increasingArray)}\n>> Decreasing: ${JSON.stringify(decreasingArray)}\n>> Sum: ${arraySum}\n>> Multiply: ${arrayMultiply}\n>> Average algebraic: ${arraySum / array.length}\n>> Average geometric: ${Math.pow(arrayMultiply, 1 / array.length).toFixed(2)}\n>> Average quadratic: ${Math.sqrt(arrayQuadraticSum / array.length).toFixed(2)}`, true]; // return result
};

// Test 11
const textAnalysis = text => {
	if (text.length <= 4) {
		return ['Please enter text of at least 5 characters', false];
	}

	let charsCount = 0; // count of characters in a string
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // array of alphabet characters

	for (let u = 0; u < text.length; u++) {
		if (text[u] in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) return ['Please enter text of at least 5 characters (numbers are not allowed)', false];
		for (let p = 0; p < alphabet.length; p++) {
			if (text[u] == alphabet[p]) {
				charsCount++;
			}
		}
	}

	return [`Your text: ${text}\n>> Text length: ${text.length}\n>> Lower case: ${text.toLowerCase()}\n>> Upper case: ${text.toUpperCase()}\n>> Chars count: ${charsCount}\n>> Reverse: ${text.split('').reverse().join('')}\n>> Array: ${JSON.stringify(text.split(''))}\n>> First letter: ${text[0]}\n>> Latest letter: ${text[text.length - 1]}\n>> Without dots: ${text.replace(/\./g, '')}`, true];
};

// Test 12
const getDate = () => {
	let currentDate = new Date(); // current date data

	// current date variables
	const currentDay = (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate();
	const currentMonth = (currentDate.getMonth() < 10 ? '0' : '') + (currentDate.getMonth() + 1);
	const currentYear = currentDate.getFullYear();

	// current time variables
	const currentHours = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
	const currentMinutes = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
	const currentSeconds = (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();

	return [currentDay + '/' + currentMonth + '/' + currentYear + '\n>> ' + currentHours + ':' + currentMinutes + ':' + currentSeconds, true];
};

// Test 13
const Armstrong = number => {
	if (number <= 2 || isNaN(number)) {
		return ['Please enter correct number at least 3 numbers', false];
	}

	const numberArray = number.toString().split('').map(Number);
	let result = 0;

	for (let t = 0; t < numberArray.length; t++) {
		result += Math.pow(numberArray[t], numberArray.length);
	}

	if (result == number) {
		return [`${number} is an Armstrong number`, true];
	} else {
		return [`${number} is not an Armstrong number`, false];
	}
};

// Test 14
const nestedArray = array => {
	if (array.length <= 1) {
		return ['Please enter more array values', false];
	}
	let maxResult = 0; // initial max result

	array.map((item, index) => {
		if (typeof item == 'object') {
			for (let x = 0; x < item.length; x++) {
				if (item[x] > maxResult) {
					maxResult = item[x];
				}
			}
		} else if (item > maxResult) {
			maxResult = item;
		} else if (isNaN(item)) {
			return ['Please enter only numbers', false];
		}
	});

	return [`Your array max = ${maxResult}`, true];
};

// Function for (test number 15 and 16)
const factorialFind = num => {
	if (num === 0) return 1;
	let result = 1;
	while (num > 1) {
		result *= num;
		num--;
	}
	return result;
};

// Test 15
const combination = (k, n) => {
	if (isNaN(n) || isNaN(k) || n < 1 || n > 100 || k < 1 || k > 100) {
		return ['Please enter only numbers between 1 and 100'];
	}

	// factorial results
	const factorialK = factorialFind(k);
	const factorialN = factorialFind(n);
	const factorialNK = factorialFind(n - k);

	return [factorialN / (factorialK * factorialNK), true];
};

// Test 16
const placement = (k, n) => {
	if (isNaN(n) || isNaN(k) || n < 1 || n > 100 || k < 1 || k > 100) {
		return ['Please enter only numbers between 1 and 100'];
	}

	// factorial results
	const factorialN = factorialFind(n);
	const factorialNK = factorialFind(n - k);

	return [factorialN / factorialNK, true];
};

// Test 17
const arrayZeros = array => {
	if (array.length <= 1) {
		return ['Please enter some numbers (min: 2)', false];
	}

	let zeroCounter = 0;

	for (let e = 0; e < array.length; e++) {
		if (array[e] == 0) {
			array.splice(e, 1); // splice this array item (remove)
			zeroCounter++; // add to counter (for zero is in array checking)
			array.push(0); // add in the end
		}
	}

	if (zeroCounter <= 0) return ['Please enter zero', false];

	return [`Zero placed in the end of array: ${JSON.stringify(array)}`, true];
};

// Test 19
const permutation = string => {
	// recursion function
	const permutate = str => {
		if (str.length == 1) {
			return [str]; // just returns string
		} else if (str.length <= 0 || str == '') {
			return ['Please enter some value!', false]; // returns error text
		}

		let permutations = []; // permutations array (combinations)

		// for-loop => iterate each element
		for (let i = 0; i < str.length; i++) {
			const permChar = str[i]; // text character
			let remainingChars = str.slice(0, i) + str.slice(i + 1); // here I slice two elements and after it send to the recursion

			let remainingPerms = permutate(remainingChars); // do recursion

			/* str = 'ABC'
             
				!1) slices:
				str.slice(0, i)  //* i = 0, str.slice(0, 0) = ''
				str.slice(i + 1) = 'BC'  //* str.slice(0 + 1) = 'BC'
				remainingChars = '' + 'BC' = 'BC'
				
				!2) send it to function (recursion)
					permutate('BC')

					* After recursion call, get perms for 'BC'
					* For example, if permutate('BC') returns ['BC', 'CB']
					* We perm 'A' with each perm 'BC' and 'CB'
					* Result for this step: ['ABC', 'ACB']


				!3) step: i = 1

					* i = 1
					* permChar = 'B'
					* remainingChars = 'AC'
					* Recursively call permutate('AC')
					
					* After recursion call, get perms for 'AC'
					* permutate('AC') returns ['AC', 'CA']
					* We perm 'B' with each perm 'AC' and 'CA'
					* Result for this step: ['BAC', 'BCA']


				!4) step: i = 2

					* i = 2
					* permChar = 'C'
					* remainingChars = 'AB'
					* Recursively call permutate('AB')
					
					* After recursion call, get perms for 'AB'
					* permutate('AB') returns ['AB', 'BA']
					* We perm 'C' with each perm 'AB' and 'BA'
					* Result for this step: ['CAB', 'CBA']
			*/

			// iterate each perm of remaining
			for (const perm of remainingPerms) {
				permutations.push(permChar + perm); // push to array textCharacter + permutation
			}
		}
		return permutations;
	};

	const perms = permutate(string); // result

	if (perms[0] === 'Please enter some value!') {
		return [perms[0], false]; // if invalid result
	}

	return [JSON.stringify(perms), true]; // if valid result
};

// Test 20
const quadraticEquation = (a, b, c) => {
	const discriminant = b ** 2 - 4 * a * c;
	let x1, x2;
	if (discriminant < 0) {
		const part1 = (-b / (2 * a)).toFixed(2);
		const part2 = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
		x1 = `${part1} + ${part2}i`;
		x2 = `${part1} - ${part2}i`;
		return [`x1 = ${x1}; x2 = ${x2};`, true];
	} else if (discriminant == 0) {
		x1 = (-b / (2 * a)).toFixed(2);
		return [`x = ${x1}`, true];
	} else {
		x1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
		x2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
		return [`x1 = ${x1}; x2 = ${x2};`, true];
	}
};
