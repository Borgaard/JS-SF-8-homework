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

// Function to convert F to C.  Outputs result in console
function fToC (temperature) {
   console.log(temperature + " Degrees Fahrenheit equals");
   console.log(Math.round(((temperature - 32) / 1.8) * 100) / 100 + " Degrees Celcius");
}

//Function to convert C to F.  Outputs result in console
function cToF (temperature) {
   console.log(temperature + " Degrees Celcius equals");
   console.log(Math.round(((temperature * 1.8) + 32) * 100) / 100 + " Degrees Fahrenheit");
}

//Function to alert user if they try to convert with no temperature
function warnUser () {
   window.alert("You must enter something dude");
}

//Declare temperature variable and grab button elements from HTML page
let temperature;
let fToCButton = document.getElementById("fahrenheit_to_celsius");
let cToFButton = document.getElementById("celsius_to_fahrenheit");

//On fToC button click, runs temperature convert function
fToCButton.addEventListener("click", function() {
   temperature = document.getElementById("temperature").value;
   if (!temperature) {
      warnUser();
      return;
   }
   fToC(temperature);
})

//On cToF button click, runs temperature convert function
cToFButton.addEventListener("click", function() {
   temperature = document.getElementById("temperature").value;
   if (!temperature) {
      warnUser();
      return;
   }
   cToF(temperature);
})