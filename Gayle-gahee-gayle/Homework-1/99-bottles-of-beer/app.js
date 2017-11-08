/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/
var bottles;
for (beerCount=99; beerCount >=1; beerCount--)
{
  if (beerCount <= 1) {
   bottles = "bottle";
} else {
   bottles = "bottles";
}


  console.log (beerCount + " " + bottles +" of beer on the wall, " + beerCount + " " + bottles  + " of beer." + "\n" + " "
  + "Take one down and pass it around," + " " + (beerCount-1) + " " + bottles + " of beer on the wall." );


}

console.log ("No more bottles of beer on the wall, no more bottles of beer."+ "\n" + " Go to the store and buy some more, 99 bottles of beer on the wall.");

// for (i=99;i>=1;i--)
//   console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall." + "</br>");

let heading = document.createElement('h1')
let songLine = document.createElement('li');

let headingText = document.createTextNode("99 Bottles of Beer on the Wall");
let lyrics = document.createTextNode (beerCount + " " + bottles +" of beer on the wall, " + beerCount + " " + bottles  + " of beer." + "\n" + " "
+ "Take one down and pass it around," + " " + (beerCount-1) + " " + bottles + " of beer on the wall." );

let body = document.querySelector('body');

heading.appendChild(headingText);
songLine.appendChild(lyrics);


body.appendChild(heading);
body. appendChild(songLine);
