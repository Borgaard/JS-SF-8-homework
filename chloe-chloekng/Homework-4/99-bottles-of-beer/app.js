/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

// let beerSong = document.querySelector('#beerSong');


// for (let beerCount = 99; beerCount >= 0; beerCount--) {
// 	beerTwo = beerCount - 1
// 	if (beerTwo > 1) {
// 		// console.log(beerCount + ' ' + 'bottles of beer on the wall,' + ' ' + beerCount + ' ' + 'bottles of beer.' + '\n' + 'Take one down and pass it around,' + ' ' +  beerTwo + ' ' + 'bottles of beer on the wall.');
// 		let beerLine = document.createElement('li');
// 		beerSong.appendChild(beerLine);
// 		let beerText = document.createTextNode(beerCount + ' ' + 'bottles of beer on the wall,' + ' ' + beerCount + ' ' + 'bottles of beer. ' + '\n' + 'Take one down and pass it around,' + ' ' +  beerTwo + ' ' + 'bottles of beer on the wall.');
// 		beerLine.appendChild(beerText);
// 	} else if (beerTwo === 1) {
// 		// console.log(beerCount + ' ' + 'bottles of beer on the wall,' + ' ' + beerCount + ' ' + 'bottles of beer.' + '\n' + 'Take one down and pass it around,' + ' ' +  beerTwo + ' ' + 'bottle of beer on the wall.');
// 		let beerLine = document.createElement('li');
// 		let beerText = document.createTextNode(beerCount + ' ' + 'bottles of beer on the wall,' + ' ' + beerCount + ' ' + 'bottles of beer.' + '\n' + 'Take one down and pass it around,' + ' ' +  beerTwo + ' ' + 'bottle of beer on the wall.');
// 		beerSong.appendChild(beerLine);
// 		beerLine.appendChild(beerText);
// 	} else if (beerCount === 1) {
// 		// console.log(beerCount + ' ' + 'bottle of beer on the wall,' + ' ' + beerCount + ' ' + 'bottle of beer.' + '\n' + 'Take one down and pass it around, no more bottles of beer on the wall.');
// 		let beerLine = document.createElement('li');
// 		let beerText = document.createTextNode(beerCount + ' ' + 'bottle of beer on the wall,' + ' ' + beerCount + ' ' + 'bottle of beer.' + '\n' + 'Take one down and pass it around, no more bottles of beer on the wall.');
// 		beerSong.appendChild(beerLine);
// 		beerLine.appendChild(beerText);
// 	} else if (beerCount === 0) {
// 		// console.log('No more bottles of beer on the wall, no more bottles of beer.' + '\n' + 'Go to the store and buy some more, 99 bottles of beer on the wall.');
// 		let beerLine = document.createElement('li');
// 		let beerText = document.createTextNode(' No more bottles of beer on the wall, no more bottles of beer.' + '\n' + 'Go to the store and buy some more, 99 bottles of beer on the wall.');
// 		beerSong.appendChild(beerLine);
// 		beerLine.appendChild(beerText);
// 	}

// };

///JQUERY


let $beerSong = $('#beerSong');


for (let beerCount = 99; beerCount >= 0; beerCount--) {
	beerTwo = beerCount - 1
	if (beerTwo > 1) {
		// console.log(beerCount + ' ' + 'bottles of beer on the wall,' + ' ' + beerCount + ' ' + 'bottles of beer.' + '\n' + 'Take one down and pass it around,' + ' ' +  beerTwo + ' ' + 'bottles of beer on the wall.');
		let $beerLine = $('<li>');
		$beerSong.append($beerLine);
		let beerText = document.createTextNode(beerCount + ' ' + 'bottles of beer on the wall,' + ' ' + beerCount + ' ' + 'bottles of beer. ' + '\n' + 'Take one down and pass it around,' + ' ' +  beerTwo + ' ' + 'bottles of beer on the wall.');
		$beerLine.append(beerText);
	} else if (beerTwo === 1) {
		// console.log(beerCount + ' ' + 'bottles of beer on the wall,' + ' ' + beerCount + ' ' + 'bottles of beer.' + '\n' + 'Take one down and pass it around,' + ' ' +  beerTwo + ' ' + 'bottle of beer on the wall.');
		let $beerLine = $('<li>');
		$beerSong.append($beerLine);
		let beerText = document.createTextNode(beerCount + ' ' + 'bottles of beer on the wall,' + ' ' + beerCount + ' ' + 'bottles of beer.' + '\n' + 'Take one down and pass it around,' + ' ' +  beerTwo + ' ' + 'bottle of beer on the wall.');
		$beerLine.append(beerText);
	} else if (beerCount === 1) {
		// console.log(beerCount + ' ' + 'bottle of beer on the wall,' + ' ' + beerCount + ' ' + 'bottle of beer.' + '\n' + 'Take one down and pass it around, no more bottles of beer on the wall.');
		let $beerLine = $('<li>');
		$beerSong.append($beerLine);
		let beerText = document.createTextNode(beerCount + ' ' + 'bottle of beer on the wall,' + ' ' + beerCount + ' ' + 'bottle of beer.' + '\n' + 'Take one down and pass it around, no more bottles of beer on the wall.');
		$beerLine.append(beerText);
	} else if (beerCount === 0) {
		// console.log('No more bottles of beer on the wall, no more bottles of beer.' + '\n' + 'Go to the store and buy some more, 99 bottles of beer on the wall.');
		let $beerLine = $('<li>');
		$beerSong.append($beerLine);
		let beerText = document.createTextNode(' No more bottles of beer on the wall, no more bottles of beer.' + '\n' + 'Go to the store and buy some more, 99 bottles of beer on the wall.');
		$beerLine.append(beerText);
	}

};









