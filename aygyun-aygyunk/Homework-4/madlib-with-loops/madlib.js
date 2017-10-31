
//Create button 

var createButton = document.getElementById('create');
var updateHeading = document.getElementById("xForY"); 

var getMadLib = function() {
  var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));

  updateHeading.innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

};
  
createButton.addEventListener('click', getMadLib); 

  
//Bonus-Favorite button-Still working on it 
/*
var favButton = document.getElementById("save"); 

favButton.addEventListener('click', function() {

var favArray=[];

favArray.push(updateHeading.innerHTML);

console.log(favArray);

}, false); */ 

//Print button, still working on it 


/*var favHeading = document.getElementById("favorites");

var printButton = document.getElementById("print");

printButton.addEventListener(click, function() {


}; */ 




//Bonus-Print Button 


