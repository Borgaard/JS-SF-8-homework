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

// OPEN WEATHER MAP
var zipcode = 94123;
var apiKey = "&APPID=XXXXXXXXXXXXXX";
var questionUrl = "http://api.openweathermap.org/data/2.5/weather?q=us.";
// var questionData;

// $.get(questionUrl+zipcode+apiKey, function(r) {
//     var questionData = r;
//     console.log(questionData);
//     var degF = (questionData.main.temp - 273.15) * 1.8 + 32;
//     var degFInt = Math.floor(degF);
//     console.log("Temp is " + degFInt);
//     $('#temp').html(degFInt);
// });

// WEATHER UNLOCKED DATA
var appID = "XXXXXXXXXXXXXX";
var appKey = "XXXXXXXXXXXXXX";
var requestURL = "http://api.weatherunlocked.com/api/current/us.";
var credentialURL = "?app_id="+appID+"&app_key="+appKey;

// $.get(requestURL+zipcode+credentialURL, function(r) {
//     var questionData = r;
//     console.log(questionData);
//     console.log("Temp is " + questionData.temp_f);
//     $('#temp2').html(questionData.temp_f);
// });

$( document ).ready(function() {
	// e.preventDefault();
  	$('#zipcode').focus();

	$('#entry #getTemp').on('submit click', function(e){
		zipcode = $( '#zipcode' ).val();
		weatherUnlocked(zipcode);
		openWeather(zipcode);
		$('#zipcode').val('');
		return false;
	});
});

function weatherUnlocked(zip){
	$.get(requestURL+zip+credentialURL, function(r) {
		var questionData = r;
	    $('#temp2').html(questionData.temp_f);
	});
};

function openWeather(zip){
	$.get(questionUrl+zip+apiKey, function(r) {
	    var questionData = r;
	    var degF = (questionData.main.temp - 273.15) * 1.8 + 32;
	    var degFInt = Math.floor(degF);
	    $('#temp').html(degFInt);
	});
};



