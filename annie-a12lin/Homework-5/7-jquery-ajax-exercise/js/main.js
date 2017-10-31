/*

1. Sign up for openweathermap.org and generate an API key.
2. User either $.ajax or $.get to pull weather current data. (read up on them. or use Fetch instead.)
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



const apiKey = "REMOVED";
const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?id=5391959&APPID=" + apiKey;
const weatherUrl2 = "http://api.openweathermap.org/data/2.5/forecast?id=5391959&APPID=" + apiKey;

function makeRequest(url) {
    //console.log('Making request');
    fetch(url).then(function(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log(response.statusText);
    }
    }).then(function(data) {
        console.log(data);
        let temp = data.main.temp;
        console.log(temp);
        let degF = (temp - 273.15) * 1.8 + 32;
        let degFInt = Math.floor(degF);
        console.log(degFInt);
        $("#temp").text(degFInt);
    });
}

makeRequest(weatherUrl);





const weatherUnlockedUrl = "http://api.weatherunlocked.com/api/current/37.77,-122.42?app_id=REMOVED&app_key=REMOVED";

function makeUnlockedRequest(url) {
    //console.log('Making request');
    fetch(url).then(function(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log(response.statusText);
    }
    }).then(function(data) {
        console.log(data);
        let temp = data.temp_f;
        console.log(temp);
        //let degF = (temp - 273.15) * 1.8 + 32;
        //let degFInt = Math.floor(degF);
        //console.log(degFInt);
        $("#temp2").text(temp);
    });
}

makeUnlockedRequest(weatherUnlockedUrl);




function makeRequestCustom(url) {
    //console.log('Making request');
    fetch(url).then(function(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log(response.statusText);
    }
    }).then(function(data) {
        console.log(data);
        let temp = data.main.temp;
        console.log(temp);
        let degF = (temp - 273.15) * 1.8 + 32;
        let degFInt = Math.floor(degF);
        console.log(degFInt);
        $("#temp3").text(degFInt);
    });
}


document.querySelector("#getTemp").addEventListener('click', function() {
    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    const weatherUrlCustom = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "&APPID=" + apiKey;    
    makeRequestCustom(weatherUrlCustom);
}, false);



