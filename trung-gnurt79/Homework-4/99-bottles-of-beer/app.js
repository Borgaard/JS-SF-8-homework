
/*
  99 Bottles of Beer on the Wall (using Vanilla JavaScript)
  by Trung Lac
*/
/*
// Global Variables
let emptyArray = [];
let bottleIndex = 0;
let numOfBottles = 99;
let lyricList = document.querySelector('#lyrics');

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
var counter = 0;
let playSong = function() {
  let lyricLine = document.createElement('li');
  let lyricText = "";
  if (counter < newArray.length) {
    switch (newArray[counter]) {
      case 1:
        lyricText = document.createTextNode(newArray[counter] + " bottle of beer on the wall, " + newArray[counter] + " bottle of beer. \n Take one down and pass it around, There's no more bottles of beer on the wall. \n No more bottles of beer on the wall, no more bottles of beer. \n Go to the store and buy some more, " + numOfBottles + " bottles of beer on the wall.");
        // console.log("end of song.");
        break;
      default:
        lyricText = document.createTextNode(newArray[counter] + " bottles of beer on the wall, " + newArray[counter] + " bottles of beer. \n Take one down and pass it around, " + newArray[counter + 1] + " bottles of beer on the wall.");
        // console.log(newArray[counter]);

    }
    lyricLine.appendChild(lyricText);
    document.body.appendChild(lyricLine);
    // console.log(newArray[counter]);
    counter++;
  }
}
setInterval(playSong, 100);
*/

//////////////////////////////////////////////////
//////////////////////////////////////////////////

/*
  99 Bottles of Beer on the Wall (using jQuery)
  by Trung Lac
*/

// Global Variables
let emptyArray = [];
let bottleIndex = 0;
let numOfBottles = 99;
let counter = 0;
let $lyricList = $('#lyrics');

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

// Print to HTML the lyrics of the song
let playSong = function() {

  // Local variables
  let lyricString = "";
  let lyricText = [];

  // Traverse bottle array to constuct lyric lines
  if (counter < newArray.length) {
    let $lyricLine = $('li');
    switch (counter) {
      case 98:
        lyricString = newArray[counter] + " bottle of beer on the wall, " + newArray[counter] + " bottle of beer. <br> Take one down and pass it around. There's no more bottles of beer on the wall. <br> No more bottles of beer on the wall, no more bottles of beer. <br> Go to the store and buy some more, " + numOfBottles + " bottles of beer on the wall. <br> --END OF SONG--";

        // Push the lyric string on the lyricText array
        lyricText.push("<li>" + lyricString + "</li>");
        // console.log(lyricString);
        // console.log("counter: " + counter);
        // console.log(lyricText);
        break;
      default:
        lyricString = newArray[counter] + " bottles of beer on the wall, " + newArray[counter] + " bottles of beer. <br> Take one down and pass it around, " + newArray[counter + 1] + " bottles of beer on the wall.";

        // Push the lyric string on the lyricText array
        lyricText.push("<li>" + lyricString + "</li>");
        // console.log("counter: " + counter);
        // console.log(lyricText);
    }

    // Pop the last lyric string and add it <ul> in the DOM
    $lyricList.append(lyricText.pop());
    $('body').append($lyricList);
    // console.log("Array[" + counter + "]: " + newArray[counter]);
    counter++;
  }
}

// Call the playSong function every 100ms
setInterval(playSong, 100);
