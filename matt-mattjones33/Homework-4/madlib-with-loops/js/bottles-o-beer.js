// Vanilla JavaScript

// let songLyrics = document.querySelector("ul");
// let newLineText;

// for (var i = 99; i >= 0; i--) {
//     let newLine = document.createElement("li");
//     if (i > 2) {
//         newLineText = document.createTextNode(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down pass it around, " + (i - 1) + " bottles of beer on the wall.");
//     } else if (i === 2) {
//         newLineText = document.createTextNode(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down pass it around, " + (i - 1) + " bottle of beer on the wall.");
//     } else if (i === 1) {
//         newLineText = document.createTextNode(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down pass it around, no more bottles of beer on the wall.");
//     } else {
//         newLineText = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
//     };
//     newLine.appendChild(newLineText);
//     songLyrics.appendChild(newLine);
// }

// let anotherBeer = document.querySelector("#anotherBeer")
// let beerCount = 99

// anotherBeer.addEventListener('click', function(event) {
//     event.preventDefault();
//     let newLine = document.createElement("li");
//     if (beerCount > 2) {
//         newLineText = document.createTextNode(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer. Take one down pass it around, " + (beerCount - 1) + " bottles of beer on the wall.")
//         beerCount = beerCount - 1;
//     } else if (beerCount === 2) {
//         newLineText = document.createTextNode(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer. Take one down pass it around, " + (beerCount - 1) + " bottle of beer on the wall.")
//         beerCount = beerCount - 1;
//     } else if (beerCount === 1) {
//         newLineText = document.createTextNode(beerCount + " bottle of beer on the wall, " + beerCount + " bottle of beer. Take one down pass it around, no more bottles of beer on the wall.")
//         beerCount = beerCount - 1;
//     } else if (beerCount === 0) {
//         newLineText = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
//         beerCount = beerCount + 99;
//     }
//     newLine.appendChild(newLineText);
//     songLyrics.appendChild(newLine);
// })


// jQuery

let listItem;

// for (var i = 99; i >= 0; i--) {
//     if (i > 2) {
//         listItem = $("<li>").text(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down pass it around, " + (i - 1) + " bottles of beer on the wall.");
//     } else if (i === 2) {
//         listItem = $("<li>").text(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down pass it around, " + (i - 1) + " bottle of beer on the wall.");
//     } else if (i === 1) {
//         listItem = $("<li>").text(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down pass it around, no more bottles of beer on the wall.");
//     } else {
//         listItem = $("<li>").text("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
//     }
//     $("ul").append(listItem)
// }

let beerCount = 99

$("#anotherBeer").on('click', function(event) {
    event.preventDefault();
    if (beerCount > 2) {
        listItem = $("<li>").text(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer. Take one down pass it around, " + (beerCount - 1) + " bottles of beer on the wall.");
        beerCount = beerCount - 1;
    } else if (beerCount === 2) {
        listItem = $("<li>").text(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer. Take one down pass it around, " + (beerCount - 1) + " bottle of beer on the wall.");
        beerCount = beerCount - 1;
    } else if (beerCount === 1) {
        listItem = $("<li>").text(beerCount + " bottle of beer on the wall, " + beerCount + " bottle of beer. Take one down pass it around, no more bottles of beer on the wall.");
        beerCount = beerCount - 1;
    } else {
        listItem = $("<li>").text("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        beerCount = beerCount + 99;
    };
    $("ul").append(listItem);
});