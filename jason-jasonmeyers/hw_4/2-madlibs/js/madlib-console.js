var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var tracker = [];
var favorites = []


let messageOut = document.getElementById('xForY');
let create = document.getElementById('create');

function setPhrase(event){
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  let newPhrase = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
  counter = tracker.length;
  tracker.push(newPhrase);
  messageOut.innerHTML = newPhrase;
}

function saveFavorites(){

}

create.addEventListener('click', setPhrase);

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

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
