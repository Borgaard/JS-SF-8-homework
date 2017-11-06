let  button = document.querySelector('#create');
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


button.addEventListener('click', function(event) {
	event.preventDefault();
	text = document.createTextNode('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
	document.querySelector('#xForY').appendChild(text);
}, false);
