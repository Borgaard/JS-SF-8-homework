/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/
// Global Variables
let emptyArray = [];
let bottleIndex = 0;
let numOfBottles = 99;

// Create an array with a number of elements equal to numOfBottles
emptyArray.length = numOfBottles;
// Fill this array with zeroes
emptyArray.fill(0);

// Map the array of zeroes with a new array that increments by one
let newArray = emptyArray.map(function(el) {
  bottleIndex++;
  return el + bottleIndex;
});

// Reverse this array so that it starts with the largest number
newArray.reverse();

// Print to console the lyrics of the song
newArray.forEach(function(el) {
  if (el > 1) {
    console.log(el + " bottles of beer on the wall, " + el + " bottles of beer. \n Take one down and pass it around, " + (el - 1) + " bottles of beer on the wall.");
  }
  else {
    console.log(el + " bottle of beer on the wall, " + el + " bottle of beer. \n Take one down and pass it around, There's no more bottles of beer on the wall. \n No more bottles of beer on the wall, no more bottles of beer. \n Go to the store and buy some more, " + numOfBottles + " bottles of beer on the wall.");
  }
});
