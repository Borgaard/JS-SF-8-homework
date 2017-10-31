/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/


let beerTotal = 10;
let beerMax = beerTotal;


function bottlePluralTest(number){
	if (number === 1){
		return "bottle";
	}
	else {
		return "bottles";
	}
};

// for (var beer = 99; beer > 0; beer--){
// 	console.log(beer + " " + bottlePluralTest(beer) + " of beer on the wall, " + beer + " " + bottlePluralTest(beer) + " of beer.");
// 	console.log("Take one down and pass it around, " + (beer-1) + " " + bottlePluralTest(beer-1) + " of beer on the wall.");
// };


// document.getElementById("beerMe").addEventListener("click", beering);

// function beering(){
// 	console.log(beerTotal + " " + bottlePluralTest(beerTotal) + " of beer on the wall, " + beerTotal + " " + bottlePluralTest(beerTotal) + " of beer.");
// 	beerTotal--;
// 	console.log("Take one down and pass it around, " + (beerTotal) + " " + bottlePluralTest(beerTotal) + " of beer on the wall.");
// }

$('#beerMe').click( function(){

	if ( beerTotal > 0){
		$( "#beerTotal" ).empty().append(beerTotal + " " + bottlePluralTest(beerTotal) + " of beer on the wall, " + beerTotal + " " + bottlePluralTest(beerTotal) +
		 " of beer." + "</br>"+"Take one down and pass it around, " + (beerTotal-1) + " " + bottlePluralTest(beerTotal-1) + " of beer on the wall.");
		beerTotal--;
		$(".beer").css("height", (((beerTotal+1)/beerMax)*100)+"%");
	}
	else{
		$(".beer").css("height", "0%");
		$( "#beerTotal" ).empty().append("No more bottles of beer on the wall, no more bottles of beer.</br> Go to the store and buy some more, " + beerMax + " bottles of beer on the wall.");
		if ( beerTotal === 0) { beerTotal = beerMax}
		}
});





