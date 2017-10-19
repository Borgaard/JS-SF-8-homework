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

var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=San Francisco&APPID=";
var apiKey = "";

/*
$.get(weatherUrl, function(data) {
    console.log(data);
    let temp = data.main.temp;
    let degF = (temp - 273.15) * 1.8 + 32;
    let degFInt = Math.floor(degF);
    console.log(degFInt);
    $('#temp').text(degFInt);
});
*/

var weatherUnlockedUrl = "http://api.weatherunlocked.com/api/current/us.94108?app_id=&app_key="
var apiID = ""
var apiKey2 = ""

/*
$.get(weatherUnlockedUrl, function(data2) {
    console.log(data2);
    $('#temp2').text(data2.temp_f);
})
*/

/* Refactored - better solution was to have a function for DOM manipulation and then call that within the .get methods

let openWeather = $.get(weatherUrl, function(data1) {
    console.log(data1);
    return data1;
});

let weatherUnlocked = $.get(weatherUnlockedUrl, function(data2) {
    console.log(data2);
    return data2;
});

console.log(openWeather); // caught up trying to drill down to temp in the Javascript object that is the value of openWeather
let temp = openWeather.responseJSON.main.temp;
let degF = (temp - 273.15) * 1.8 + 32;
let degFInt = Math.floor(degF);
console.log(degFInt);

$('#temp').text(degFInt);

$('#temp2').text(weatherUnlocked.responseJSON.temp_f);

*/

// Attempt 2

function kelvinToF(initialTemp) {
    //let degF = (initialTemp - 273.15) * 1.8 + 32;
    // let degFInt = Math.floor(degF);
    // return degFInt;
    return Math.floor((initialTemp - 273.15) * 1.8 + 32);
}

function addToDOM(location, tempF) {
    $(location).text(tempF);
}

$.get(weatherUrl, function(data1) {
    let tempF = kelvinToF(data1.main.temp);
    addToDOM('#temp', tempF);
});

$.get(weatherUnlockedUrl, function(data2) {
    addToDOM('#temp2', data2);
});
