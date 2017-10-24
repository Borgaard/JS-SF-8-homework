/*
1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
   Note: Equation to convert F to C:
   C = (F - 32) / 1.8

   Test your function.
2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
   Note: Equation to convert C to F:
   F = 1.8 * C + 32
   Test your function.
BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
	1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.
	    (Hint: read about the document.querySelector() method.)
	2.  Set the appropriate function to run when each button is clicked.
		(Hint: read about the addEventListener() method.)
BONUS 2: Display the result of each calculation in the browser window rather than in the console:
	1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.
BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)
*/

// Global Varables
let inputTemp;
let resultText = document.getElementById("result");

// Get the value of the input and convert it to a Number
function getInput() {
  inputTemp = Number(document.querySelector("section.converter-container input[type='text']").value, "");
  // console.log(typeof(inputTemp) + " initial input is " + inputTemp);
  return inputTemp;
}

// Reset the value of the input field
function resetInput() {
  document.querySelector("section.converter-container input[type='text']").value = '';
}

// Calculate the value of the input temperature in Celsius
let celsiusTempExp = function() {
  // console.log("inputTemp(celsius): " + getInput());
  resultText.textContent =  "The temperature in Celsius is " + Math.round((getInput() - 32) / 1.8) + "!";
  resetInput();
  // console.log(resultText);
}

// Calculate the value of the input temperature in Fahrenheit
 let fahrenheitTempExp = function() {
  //  console.log("inputTemp(Fahrenheit): " + getInput());
   resultText.textContent =  "The temperature in Fahrenheit is " + Math.round((1.8 * getInput()) + 32) + "!";
   resetInput();
  //  console.log(resultText);
 }

var celsiusBtn = document.getElementById("fahrenheit_to_celsius");
celsiusBtn.addEventListener("click", celsiusTempExp);

var fahrenheitBtn = document.getElementById("celsius_to_fahrenheit");
fahrenheitBtn.addEventListener("click", fahrenheitTempExp);
