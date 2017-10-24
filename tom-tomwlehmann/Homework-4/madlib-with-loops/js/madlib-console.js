//Creating startup name arrays
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

//Selecting the h1 and button elements from the DOM
let xForY = document.querySelector('#xForY');
let createStartupButton = document.querySelector('#create');

//Adding click eventlistener to the button
createStartupButton.addEventListener('click', function() {

	//Creating random variables to select random entries from startup name arrays
	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));

	//Setting xForY h1 element to have madlibs-like string
	xForY.innerHTML = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
});