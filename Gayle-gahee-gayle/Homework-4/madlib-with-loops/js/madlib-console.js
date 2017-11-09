
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

let $buttonCreate = $('#create');
let $buttonSave = $('#save');
let $buttonPrint = $('#print');
let $outputH1 = $('#xForY');

let $favorites = $('#favorites');
let arrayFavorites = [];

$buttonCreate.on('click', function(){
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  var newStartup = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
  $('#xForY').text(newStartup);

  $buttonSave.on("click", function() {
      arrayFavorites.push(newStartup);
  });

  $buttonPrint.on("click", function() {
    $("#favorites").text(arrayFavorites);
});

});
