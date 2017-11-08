
let body = document.querySelector('body');

let heading = document.createElement('h1');
let headingText = document.createTextNode("99 Bottles of Beer on the Wall");
heading.appendChild(headingText);
body.appendChild(heading);


let bottles;

for (beerCount=99; beerCount >0; beerCount--){
  if (beerCount > 2) {
   bottles = "bottles";
   let songLine1 = document.createElement('li');
   let lyrics = document.createTextNode (beerCount + " " + bottles +" of beer on the wall, " + beerCount + " " + bottles  + " of beer." + "\n" + " "
   + "Take one down and pass it around," + " " + (beerCount-1) + " " + bottles + " of beer on the wall." );
   songLine1.appendChild(lyrics);
   body.appendChild(songLine1);

} else if (beerCount = 2) {
 let songLine2 = document.createElement('li');
 let lyrics2 = document.createTextNode (beerCount + " bottles of beer on the wall, " + beerCount + " bottle of beer." + "\n" + " "
 + "Take one down and pass it around," + " " + (beerCount-1) + " bottle of beer on the wall." );
 songLine2.appendChild(lyrics2);
 body.appendChild(songLine2);

} else if (beerCount = 1) {
 let songLine3 = document.createElement('li');
 let lyrics3 = document.createTextNode (beerCount + " bottle of beer on the wall, " + beerCount + " bottle of beer." + "\n" + " "
 + "Take one down and pass it around," + " " + (beerCount-1) + " bottle of beer on the wall." );
 songLine3.appendChild(lyrics3);
 body.appendChild(songLine3);

} else {
   let lastLine = document.createElement('li');
   let lastSongLine = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer."+ "\n" + " Go to the store and buy some more, 99 bottles of beer on the wall.");
   lastLine.appendChild(lastSongLine);
   body.appendChild(lastLine);

}



};
