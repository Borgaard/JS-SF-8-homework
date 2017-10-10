/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

for (let beerIndex = 99; beerIndex >= 0; beerIndex--) {
	if (beerIndex >= 1) {
  listItem = document.createElement('li');
  listItemText = document.createTextNode(beerIndex + " bottles of beer on the wall " + beerIndex + " bottles of beer." + "\n" + "take one down, pass it around " + (beerIndex -1) + " bottles of beer on the wall");
  listItem.appendChild(listItemText);
  document.querySelector('#beer').appendChild(listItem);
	} else {
    listItem = document.createElement('li');
    listItemText = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer." + "\n" + "Go to the store and buy some more, 99 bottles of beer on the wall");
    listItem.appendChild(listItemText);
    document.querySelector('#beer').appendChild(listItem);
	}
};
