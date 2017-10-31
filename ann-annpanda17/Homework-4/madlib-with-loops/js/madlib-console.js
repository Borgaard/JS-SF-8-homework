var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

var printer = document.querySelector('#print');

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

var answer = document.querySelector('h1');
var favoriteList = document.querySelector('h2');
let phrase = document.createTextNode('');
answer.appendChild(phrase);

//answer.appendChild(phrase);

var favorites = [];

document.getElementById("create").addEventListener("click", function() {
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  phrase = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
  document.querySelector('#xForY').innerHTML = phrase;
});

document.getElementById("save").addEventListener("click", function() {
  favorites.push(phrase);
});

printer.addEventListener("click", function() {
  console.log(favorites);
  let listText = document.createTextNode(favorites);
  favoriteList.appendChild(listText);
});
