var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var tracker = [];
var favorites = [];

let messageOut = document.getElementById('xForY');
let create = document.getElementById('create');
let save = document.getElementById('save');
let favoritesDiv = document.getElementById('favorites');
save.addEventListener('click', saveFavorites);

let print = document.getElementById('print');
print.addEventListener('click', printFavorites);

create.addEventListener('click', setPhrase);
function setPhrase(event){
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  let newPhrase = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
  counter = tracker.length;
  tracker.push(newPhrase);
  messageOut.innerHTML = newPhrase;
}

function saveFavorites(){
  var thisFav = tracker[tracker.length - 1];
  if(favorites.indexOf(thisFav) < 0) {
    favorites.push(thisFav);
  }
  console.log(tracker, favorites)
}


function printFavorites() {
  favoritesDiv.innerHTML = "";
  var favs = favorites.map(function(e) {
    var p = document.createElement('p');
    var doodle = document.createTextNode(e);
    p.appendChild(doodle);
    favoritesDiv.appendChild(p);
  })
}


//Display random startup name on load
if(window.attachEvent) {
    window.attachEvent('onload', setPhrase);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            yourFunctionName(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = setPhrase;
    }
}
