/*

1. Sign up for openweathermap.org and generate an API key.

2. Use either $.ajax or $.get to pull weather current data .
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



const openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=san%20francisco&APPID=API_KEY_HERE";



$.ajax({

   type:"Get",
	 dataType: "json",
   url: openWeatherUrl, 
    
    error: function() {
      $('#temp').html('Something went wrong'); 
   },
    
   success: function (data) {
        
        let kelvin = data.main.temp; 

        let degF = (kelvin - 273.15) * 1.8 + 32;
       
        //console.log(degF+ ' degress fahrenheit');
        degF = Math.floor(degF);

        document.querySelector("#temp").innerHTML = (degF+ ' degress fahrenheit'); 
       
}
       
});



let apiUrl = "http://api.weatherunlocked.com/api/current/us.94016?app_id=APP_ID_HERE&app_key=API_KEY_HERE"; // WeatherUnlocked. 

$.ajax({

    type:"Get",
	  dataType: "json",
    url: apiUrl, 
    
    error: function() {
    $('#temp2').html('Something went wrong'); 
   },
    
   success: function (data) {
        
        let fTemp = data.temp_f; 
        fTemp = Math.floor(fTemp);
        console.log(fTemp+ ' degress fahrenheit');

        document.querySelector("#temp2").innerHTML = (fTemp+ ' degress fahrenheit'); 
}
       
});


















































