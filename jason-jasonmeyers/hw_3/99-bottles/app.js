var beers = [];
var songs = [];
var limit = 99;
var appContainer = document.getElementById('app');
var ul = document.createElement('ul');
appContainer.appendChild(ul);

for (var i = 0; i <= limit; i++) {
  beers.push(i);
}

beers = beers.reverse();

beers.map(function(e){
  if(e >= 2){
  songs.push( e + " bottles of beer on the wall. " + e + " bottles of beer. \n"
    + "Take one down and pass it around, " + (e-1) + " bottles of beer on the wall. \n")
  }
  if (e === 1 ) {
    songs.push( e + " bottle of beer on the wall. " + e + " bottle of beer. \n"
      + "Take one down and pass it around, no more bottles of beer on the wall.\n")
  }
  if (e === 1 ) {
    songs.push("No more bottles of beer on the wall, no more bottles of beer. \n"
+ "Go to the store and buy some more, " + limit + " bottles of beer on the wall.")
  }
});



songs.forEach(function(i){
  var li = document.createElement('li');
  let wall = document.createTextNode(i);
  li.appendChild(wall);
  ul.appendChild(li);
});
