/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/

let numBottles = 99;
let song = "";

for (let i = 99; i > 0; i--) {
  let unit = i == 1 ? "bottle" : "bottles";

  let line = i.toString() + " " + unit + " of beer on the wall,\n";
  line += i.toString() + " " + unit + " of beer,\n";
  line += "Take one down, pass it around,\n";

  if (i !== 1) {
    if (i - 1 === 1) unit = "bottle";
    line += (i - 1).toString() + " " + unit + " of beer on the wall,\n\n";
  }

  song += line;
};

console.log(song + "No more bottles of beer on the wall!");
