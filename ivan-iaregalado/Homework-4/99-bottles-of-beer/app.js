/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/

var lyric = "";

for(beers = 99; beers > -1; beers--){
  if (beers === 2){
    lyric = beers + " bottles of beer on the wall, " + beers + " bottles of beer. \n Take one down and pass it around, " + (beers - 1) + " bottle of beer on the wall.";
    print(lyric);
  } else if (beers === 1){
    lyric = beers + " bottle of beer on the wall, " + beers + " bottle of beer. \n Take one down and pass it around, no more bottles of beer on the wall.";
    print(lyric);
  } else if (beers === 0){
    lyric = "No more bottles of beer on the wall, no more bottles of beer. \n Go to the store and buy some more, 99 bottles of beer on the wall.";
    print(lyric);
  } else {
    lyric = beers + " bottles of beer on the wall, " + beers + " bottles of beer. \n Take one down and pass it around, " + (beers - 1) + " bottles of beer on the wall.";
    print(lyric);
  }
}


function print(lyric){
  console.log(lyric);
  /*  -- vanilla JS --
  
  let newLyricParent = document.querySelector('ul');
  let newLyric = document.createElement('li');
  let newLyricText = document.createTextNode(lyric);
  newLyric.appendChild(newLyricText);
  newLyricParent.appendChild(newLyric);
  
  */

  // -- refactored with JQuery --

  $('ul').append("<li>"+lyric+"</li>");
}