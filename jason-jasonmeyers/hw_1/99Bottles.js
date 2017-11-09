let song = "";
let songLength = 12;

function singBeer(songLength) {
  for (var i = songLength; i >= 0; i--) {
    let iMinus = (i - 1);
    if (i > 2) {
      song += i + " bottles of beer on the wall, " +
        i + " bottles of beer. \nTake one down and pass it around, " +
        iMinus + " bottles of beer on the wall. \n \n";
    }
    if (i === 2) {
      song += i + " bottles of beer on the wall, " +
        i + " bottles of beer. \nTake one down and pass it around, " +
        iMinus + " lonely, glaring, restless bottle of beer on the wall. \n \n";
    }
    if (i === 1) {
      song += i + " bottle of beer on the wall, " +
        i + " lonely, glaring, restless bottle of beer. \nTake it down and pass it around, " +
        "no more bottles of beer on the wall. \n \n";
    }
    if (i === 0) {
      song += "No more bottles of beer on the wall, no more bottles of beer. \n" +
        "Go to the store and buy some more, " +
        + songLength + " bottles of beer on the wall!";
    }
  }
  console.log(song);
}

singBeer(songLength);
