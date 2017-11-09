var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


let createButton = document.querySelector('#create');
let xForY = document.querySelector('#xForY');

createButton.addEventListener('click', function(e) {

	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));


	xForY.innerHTML = ''
	var startupRandom = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
	var startupRandomText = document.createTextNode(startupRandom);
	xForY.appendChild(startupRandomText);

}, false);

