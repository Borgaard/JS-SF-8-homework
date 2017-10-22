var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];


var random1;
var random2;
let statement;
let saveArray = [];
let createBtn = document.querySelector('#create');
let saveBtn = document.querySelector('#save');
let printBtn = document.querySelector('#print');


createBtn.addEventListener('click', function() {
    
    random1 = Math.floor((Math.random() * startupX.length));
    random2 = Math.floor((Math.random() * startupY.length));
    statement = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + " ";
    let createText = document.createTextNode(statement);
    let head = document.querySelector('h1');
    head.appendChild(createText);

}, false)

saveBtn.addEventListener('click', function() {
    
    saveArray.push(statement);
    console.log(saveArray);
    
}, false)

printBtn.addEventListener('click', function(event) {
    
    event.preventDefault();
    let favorites = document.querySelector('h2');
    let favoritesText = document.createTextNode(saveArray);
    favorites.appendChild(favoritesText);

}, false)