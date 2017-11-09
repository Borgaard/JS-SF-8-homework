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

////////////// PART 6 ANSWER ///////////////

// Create variables
const OWM_API_BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
// INSERT API KEY FOR OPEN WEATHER MAP HERE
const OWM_API_KEY = "";
var cityId = "5391997";
var $temp = $('#temp');

var weatherUrl = OWM_API_BASE_URL + "?id=" + cityId + "&appid=" + OWM_API_KEY;
// console.log(weatherUrl + "&appid=" + apiKey);

fetch(weatherUrl).then(function(response) {
  if (response.ok) { //if response.ok is truthy
    return response.json();
  } else {
    var myStatusText = response.statusText;
    console.log(myStatusText);
  }
}).then(function(weather) {
  var tempKelvin = weather.main.temp;
  // console.log(tempKelvin);
  // Fahrenheit temperature is stored in the degFInt variable):
  var degF = (tempKelvin - 273.15) * 1.8 + 32;
  var degFInt = Math.floor(degF);
  // console.log(degFInt);
  $temp.html(degFInt + "\u00B0F");
});

////////////// PART 7 ANSWER ///////////////

// Create Variables
const WL_API_BASE_URL = "http://api.weatherunlocked.com/api/current/";
const WL_LOCATION = "us.94133";
const WL_APP_ID = "935f510d";
// INSERT API KEY FOR WEATHER UNLOCKED HERE
const WL_API_KEY = "";
var $temp2 = $('#temp2');
// console.log(weatherUrl + "&appid=" + apiKey);

function getTemp(weatherData) {
  var tempKelvin = weatherData;
  // console.log(tempKelvin);
  var degFInt = Math.floor(tempKelvin);
  // console.log(degFInt);
  $temp2.html(degFInt + "\u00B0F");
};

fetch(WL_API_BASE_URL + WL_LOCATION  + "?app_id=" + WL_APP_ID+ "&app_key=" + WL_API_KEY).then(function(response) {
  if (response.ok) { //if response.ok is truthy
    return response.json();
  } else {
    var myStatusText = response.statusText;
    console.log(myStatusText);
  }
}).then(function(weather) {
  getTemp(weather.temp_f)
});

////////////// BONUS ANSWER ///////////////

var $city = $('#city');
var $state = $('#state');

function handleResp(weather)
{
  var tempKelvin = weather.main.temp;
  var degF = (tempKelvin - 273.15) * 1.8 + 32;
  var degFInt = Math.floor(degF);
  var $temp = $('<h2>').html('<p> The temperature in ' + $city.val().charAt(0).toUpperCase() + $city.val().slice(1) + ', ' + $state.val().charAt(0).toUpperCase() + $state.val().charAt(1).toUpperCase() + ' is ' + degFInt + "\u00B0F");
  $('body').append($temp);
}

function makeRequest(url) {
  // NOTES TO MYSELF
  // the overall process looks like this: on the client, a cross origin request is made with javascript. In the case of the fetch API, 'cors' mode tells the browser that its okay to make this request. If you had 'no-cors' mode instead, the browser would stop the request, because it is not to your app's origin. The server will receive the request and respond. The browser confirms that the response has the appropriate CORS headers, and if so, allows the response to be read. If the headers are not present, the browser will throw an error.

  // More informatin on CORS:
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

  fetch(url).then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.statusText);
    }
  }).then(function(data) {
      handleResp(data);
      // console.log("This is the data: " + data);\
  });
}

$('#getTemp').on('click', function(evt) {
  evt.preventDefault();
  var lat;
  var lng;
  var address = $city.val() + ", " + $state.val();
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      lat = results[0].geometry.location.lat().toFixed(0);
      lng = results[0].geometry.location.lng().toFixed(0);
      console.log('Lat: ' + lat + ', Lng: ' + lng);
      // return [Lat, Lng];
      var url = OWM_API_BASE_URL + "?lat=" + lat + "&lon=" + lng + "&appid=" + OWM_API_KEY;
      // console.log(url);
      // return url
      makeRequest(url);
    } else {
      alert("Something got wrong " + status);
    }
  });
});
