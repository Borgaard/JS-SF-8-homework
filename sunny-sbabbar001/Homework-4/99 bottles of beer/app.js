/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/
var 99BottlesOfBeer = function() {
  var line1 = [" bottle of beer on the wall "];
  var line2 = [" bottles of beer. Take one down and pass it around "];
  var line3 = [" bottles of beer on the wall. "];

  var lyrics = document.createElement('li');
  
  lyrics.innerHTML = 'first bottle number #' + line1 + line2 + line3;

};

for (var i = 99;i > 0;i--){
  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around " + (i - 1) + " bottles of beer on the wall.");
}

// var hi = function () {
//   console.log("hi");
// };
 
// hi ();

// var fullName = "";
// var name;
// var firstLetter;
// /*
//    fixName function definition should go here.
// */
// var fixName = function() {
// /***** Begin repeated code block *****/
// firstLetter = name.substring(0, 1);
// name = firstLetter.toUpperCase() + name.substring(1);
// fullName = fullName + " " + name;
// /***** End repeated code block *****/
// };



// name = prompt("Enter your first name (all in lower case):");

// fixName();


// name = prompt("Enter your second name (all in lower case):");
// fixName();



// console.log("And your full name is:" + fullName);


// var greeting = ("Ahoy"); 

// var greet = function () {
//    console.log(greeting);
// };

// greet ();


// Need some help one on one wedneday please 