var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var favList = [];
var header = document.querySelector('h1');

var createBtn = document.querySelector('#create');
var favorites = document.querySelector('#favorites');

var createText = "";
var favText = "";
var saveBtn = document.querySelector('#save');
let printBtn = document.querySelector('#print');

createBtn.addEventListener('click', function() {

  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));

  createText = document.createTextNode('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '.');

  header.appendChild(createText);
  document.body.appendChild(header);
}, false);

saveBtn.addEventListener('click', function() {
  favList.push(createText.textContent);
  console.log("Favorite list: " + favList);
  console.log(createText);
}, false);

printBtn.addEventListener('click', function() {
  favList.forEach(function(el) {
    favText = document.createTextNode(el);
    favorites.appendChild(favText);
    document.body.appendChild(favorites);
  });
}, false);

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
