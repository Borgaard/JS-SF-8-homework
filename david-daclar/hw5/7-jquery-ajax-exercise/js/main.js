/*

1. Sign up for openweathermap.org and generate an API key.
2. User either $.ajax or $.get or fetch() to pull weather current data .
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

var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var city = "San Francsico";
var apiKey = "";

var weatherUrlSf = "http://api.openweathermap.org/data/2.5/forecast?q=SanFrancisco&APPID=920dd95e4446eaec95e15db2a38ca6e4";
var weatherData;
var kelvinTemp;
var degF;
var degFInt;

function makeRequest(url) {
    console.log('Making request');
    var degFInt;
    fetch(url).then(function(response) {
        if (response.ok) {
            return response.json();
            weatherData = response.json();
        } else {
            console.log(response.statusText);
        }
        }).then(function(data) {
            console.log(data);
            kelvinTemp = data.main.temp
            console.log(kelvinTemp);
            degF = (kelvinTemp - 273.15) * 1.8 + 32;
            degFInt = Math.floor(degF);
            console.log(degFInt);
            postTemp(degFInt);
        });
 
}

function postTemp(value) {
    console.log("posting temp");
    console.log(value);
    let spanTemp = document.querySelector('#temp');
    let temp2 = document.createTextNode(value);
    spanTemp.appendChild(temp2);
    
}

makeRequest(weatherUrl + city + "&APPID=" + apiKey);




