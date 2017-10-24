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



let $city = "";
let $state = "";
var apiKey = "";


var appId = "";
var apiKey2 = ""
var weatherUrl2 = "http://api.weatherunlocked.com/api/current/us.94114?app_id="+appId+"&app_key="+apiKey2;

$('#getTemp').on('click', function(event){
	event.preventDefault();
	let $city = $('#city').val();
	let $state = $('#state').val();
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + $city + ",us&APPID="+apiKey;
	getOpenWeather(weatherUrl);
})

function getOpenWeather(weatherUrl){
	$.get(weatherUrl).then(function(response){
		let temp = response.main.temp
		var degF = (temp - 273.15) * 1.8 + 32;
		var degFInt = Math.floor(degF);
		tempToDom1(degFInt);
	});
}

$.get(weatherUrl2).then(function(response){
	let temp = response.feelslike_f;
	temp = Math.floor(temp);
	tempToDom2(temp);
})


function tempToDom1(temp1){
	$('#temp').html(temp1);
}

function tempToDom2(temp2){
	$('#temp2').html(temp2);
}