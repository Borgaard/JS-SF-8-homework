var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

let createButton = document.querySelector('#create');
let favoriteButton = document.querySelector('#save');
let printButton = document.querySelector('#print');
let h1 = document.querySelector('#xForY');
let h2 = document.querySelector('#favorites');

createButton.addEventListener('click', function(e) {
    e.preventDefault();
    random1 = Math.floor((Math.random() * startupX.length));
    random2 = Math.floor((Math.random() * startupY.length));
    h1.innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}, false);

favoriteButton.addEventListener('click', function(e) {
    e.preventDefault();
    let li = document.createElement('li');
    li.innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    li.className = 'hidden';
    h2.appendChild(li);
}, false);

printButton.addEventListener('click', function(e) {
    e.preventDefault();
    let list = document.querySelectorAll('li');
    console.log(list);
    for(i = 0; i < list.length; i++) {
        list[i].className = '';
    }
}, false);