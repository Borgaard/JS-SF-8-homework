/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/


printLyric = function(numBottles) {
    let numBottlesOnTheWall = (numBottles - 1) === 1 ? (numBottles - 1) + ' bottle ' : (numBottles - 1) + ' bottles ';
    let bottlesLeft = (numBottles - 2) === 1 ? (numBottles - 2) + ' bottle ' : (numBottles - 2) + ' bottles ';
    let goToTheStore = '\n\nNo more bottles of beer on the wall, no more bottles of beer\nGo to the store and buy some more, 99 bottles of beer on the wall.';
    let noneLeft = (bottlesLeft === '0 bottles ') ? `Take one down and pass it around, No more bottles of beer on the wall.${goToTheStore}` : `Take one down and pass it around, ${bottlesLeft} of beer on the wall.`;
    const lyrics = `\n${numBottlesOnTheWall} of beer on the wall, ${numBottlesOnTheWall} of beer.\n${noneLeft}`;
    return lyrics;
}

function ninetyNineBottlesOfBeer() {
    let bottles = 100;
    for (var i = bottles; bottles > 1; bottles--) {

        console.log(printLyric(bottles));
    }

}
ninetyNineBottlesOfBeer()