/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

let bottles = [1];
let placeholderBottles;

for (let i = 0; i < 98; i++) {
  placeholderBottles = bottles[i] + 1;
  bottles.push(placeholderBottles);
};

bottles.reverse();

let startingBottles = bottles.shift();

console.log(startingBottles + ' bottles of beer on the wall ' + startingBottles + ' bottles of beer');

bottles.forEach(function(el) {
  if (el > 1) {
    console.log('take one down pass it around ' + el + ' bottles of beer on the wall\n' + el + ' bottles of beer on the wall ' + el + ' bottles of beer\n');
  } else {
    console.log('take one down pass it around ' + el + ' bottle of beer on the wall\n' + el + ' bottle of beer on the wall ' + el + ' bottle of beer\n' )
  }
});

console.log (' take one down pass it around no more bottles of beer on the wall\n no more bottles of beer on the wall, no more bottles of beer. \n Go to the store and buy some more, 99 bottles of beer on the wall.')