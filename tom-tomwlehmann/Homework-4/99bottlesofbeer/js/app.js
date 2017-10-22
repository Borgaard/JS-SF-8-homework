//Javascript file to output lyrics of 99 bottles of beer on the wall into an HTML webpage

/* VANILLA JAVASCRIPT VERSION

let lyrics = document.querySelector('ul');
let lyric1String = '';
let lyric2String = '';
let numBottle = 99;

while (numBottle >= 0) {

	//Use if/else statements to find the appropriate lyric to add to the DOM
	if (numBottle === 1) {
		lyric1String = (numBottle + " bottle of beer on the wall, " + numBottle + " bottle of beer.\n");
	} else if (numBottle === 0) {
		lyric1String = ("No more bottles of beer on the wall, no more bottles of beer.\n");
	} else {
		lyric1String = (numBottle + " bottles of beer on the wall, " + numBottle + " bottles of beer.\n");
	}
	numBottle = (numBottle - 1);

	if (numBottle === 1) {
		lyric2String = ("Take one down and pass it around, " + numBottle + " bottle of beer on the wall.\n\n");
	} else if (numBottle === -1) {
		lyric2String = ("Go to the store and buy some more, 99 bottles of beer on the wall.\n\n");
	} else {
		lyric2String = ("Take one down and pass it around, " + numBottle + " bottles of beer on the wall.\n\n");
	}

	//Create a couple new li elements, text nodes for each lyric, and associate elements with text
	let lyric1 = document.createElement('li');
	let lyric1Text = document.createTextNode(lyric1String);
	lyric1.appendChild(lyric1Text);
	let lyric2 = document.createElement('li');
	let lyric2Text = document.createTextNode(lyric2String);
	lyric2.appendChild(lyric2Text);

	//Add the lyrics to the DOM on the ul element
	lyrics.appendChild(lyric1);
	lyrics.appendChild(lyric2);
}

   END VANILLA JAVASCRIPT VERSION */

/* JQUERY VERSION */

let lyric1String = '';
let lyric2String = '';
let numBottle = 99;

while (numBottle >= 0) {

	//Use if/else statements to find the appropriate lyric to add to the DOM
	if (numBottle === 1) {
		lyric1String = (numBottle + " bottle of beer on the wall, " + numBottle + " bottle of beer.\n");
	} else if (numBottle === 0) {
		lyric1String = ("No more bottles of beer on the wall, no more bottles of beer.\n");
	} else {
		lyric1String = (numBottle + " bottles of beer on the wall, " + numBottle + " bottles of beer.\n");
	}
	numBottle = (numBottle - 1);

	if (numBottle === 1) {
		lyric2String = ("Take one down and pass it around, " + numBottle + " bottle of beer on the wall.\n\n");
	} else if (numBottle === -1) {
		lyric2String = ("Go to the store and buy some more, 99 bottles of beer on the wall.\n\n");
	} else {
		lyric2String = ("Take one down and pass it around, " + numBottle + " bottles of beer on the wall.\n\n");
	}

	//Create a couple new li elements, text nodes for each lyric, and associate elements with text - now using jQuery
	// let lyric1 = document.createElement('li');
	// let lyric1Text = document.createTextNode(lyric1String);
	// lyric1.appendChild(lyric1Text);
	$('ul').append($('<li>' + lyric1String + '</li>'));

	// let lyric2 = document.createElement('li');
	// let lyric2Text = document.createTextNode(lyric2String);
	// lyric2.appendChild(lyric2Text);

	$('ul').append($('<li>' + lyric2String + '</li>'));
}
