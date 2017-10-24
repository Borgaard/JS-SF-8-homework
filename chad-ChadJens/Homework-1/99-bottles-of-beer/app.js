/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

for (let i = 99; i > -1; i--) {

  if (i === 0) {
  	console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
  }

  else if (i === 1) {
  	console.log("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
  }

  else if (i === 2) {
  	console.log("2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 more bottle of beer on the wall.");
  }

  else {
  	console.log(i.toString() + " bottles of beer on the wall, " + i.toString() + " bottles of beer.\nTake one down and pass it around, " + (i-1).toString() + " more bottles of beer on the wall.");
  }

}