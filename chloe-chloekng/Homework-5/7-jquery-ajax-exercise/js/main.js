/*

1. Sign up for openweathermap.org and generate an API key.
2. User either $.ajax or $.get to pull weather current data .
   for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
3. Print the temperature in the console. Note that the temperature will be in Kelvin.
4. Incorporate the following code into your app to log a Fahrenheit value for the temperature to the console
   (Fahrenheit temperature is stored in the degFInt variable):
   var degF = (temp - 273.15) * 1.8 + 32;
   var degFInt = Math.floor(degF);
5. Use DOM manipulation to add the returned temperature to the span element with the id "temp".
6. Sign up for developer.weatherunlocked.com and obtain your application ID and application key.
7. Repeat the above steps to obtain the current temperature from this data source, convert it to Fahrenheit,
   log it to the console, and then add it to the DOM (uncomment out the 3 lines indicated in index.html for this step,
   and add your temperature value to the span elmeent with the id "temp2").
8. Refactor your code as necessary to separate the code for DOM manipulation from the code for sending an HTTP request.
BONUS: Implement a form that prompts users for a city and state and returns data for the location they specify 
   (Uncomment out the existing form code in index.html as marked).

*/

'use strict';

var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=anFrancisco,ca&APPID=";
var apiKey = "";


$.get(weatherUrl, function(r) {
	//get sf temp
	let sfTemp = r.main.temp;
	console.log(sfTemp);
	//convert to degf
	let degF = (sfTemp - 273.15) * 1.8 + 32;
	let degFInt = Math.floor(degF);
	console.log(degFInt);
	//add to span element 
	// let temp = document.querySelector("#temp");
	let $temp = $('#temp'); 
	console.log($temp);
	let degText = document.createTextNode(degFInt);
	// temp.appendChild(degText);
	$temp.append(degText);

});

let weatherUrl2 = "http://api.weatherunlocked.com/api/current/37.77,-122.41?app_id=7c52fb38&app_key=";

$.get(weatherUrl2, function(r) {
	//get sf temp
	let sfTemp = r.temp_f;
	//add to span element 
	let $temp2 = $('#temp2'); 
	let degText2 = document.createTextNode(sfTemp);
	// temp.appendChild(degText);
	$temp2.append(degText2);

});


