var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];



//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

let createStartUpBtn = document.querySelector('#create');
let favStartUpBtn = document.querySelector('#save');
let printFavBtn = document.querySelector('#print');

let createdStartUp = document.querySelector('#xForY');
let favStartUpNode = document.querySelector('#favorites');
let favStartUpArray = [];

createStartUpBtn.addEventListener('click', function() {
	let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
	createdStartUp.innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}, false);

favStartUpBtn.addEventListener('click', function() {
	let newFav = createdStartUp.innerHTML;
	favStartUpArray.push(newFav);
}, false);

printFavBtn.addEventListener('click', function() {
	let liElement, liText;
	let ulElement = document.createElement('ul');
	for (let i = 0; i < favStartUpArray.length; i++) {
		liElement = document.createElement('li');
		liText = document.createTextNode(favStartUpArray[i]);
		liElement.appendChild(liText);
		ulElement.appendChild(liElement);
	}
	favStartUpNode.appendChild(ulElement);
}, false);