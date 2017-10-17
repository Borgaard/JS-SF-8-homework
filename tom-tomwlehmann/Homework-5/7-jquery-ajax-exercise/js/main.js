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

//OpenWeatherMap info/creds
var weatherUrl1 = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey1 = "Tom's API Key";

//WeatherUnlocked info/creds
var weatherUrl2 = "http://api.weatherunlocked.com/api/current/"
var apiKey2 = "Tom's API Key"

//Dom manipulation
let openWeatherTemp = function(data) {
	let temp = Math.floor((data.main.temp - 273.15) * 1.3 + 32);
	$('#temp').html(temp);
}

let weatherUnlockedTemp = function(data) {
	$('#temp2').html(Math.floor(data.temp_f));
}

//API HTTP calls (City name for OpenWeatherMap, Zipcode for WeatherUnlocked)
$.get((weatherUrl1 + "San Francisco" + apiKey1), function(response) {
	openWeatherTemp(response);
});

$.get((weatherUrl2 + "us.94107" + apiKey2), function(response) {
	weatherUnlockedTemp(response);
});