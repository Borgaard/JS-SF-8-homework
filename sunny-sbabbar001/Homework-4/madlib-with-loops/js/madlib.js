
var madLipProject = function() {
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

var getHeading = document.getElementById("xForY");

getHeading.innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
};

var createButton = document.getElementById('create');
createButton.addEventListener('click', madLipProject);