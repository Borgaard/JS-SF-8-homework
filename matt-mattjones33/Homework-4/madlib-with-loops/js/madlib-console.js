// The choices for the X and Y variables
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

// // // Vanilla JavaScript

// // Creating JS selectors for the buttons
// let newCreation = document.querySelector("#create");
// let favCreation = document.querySelector("#save");
// let printCreation = document.querySelector("#print");
// // Creating an array to capture the user's favorite startups
// let favorites = [];
// // Adding an unsorted list to the #favorites element to print favorite startups later
// let favoriteList = document.createElement('ul')
// let h2 = document.querySelector('h2');
// h2.appendChild(favoriteList);


// // Adding a title to the page
// document.getElementById("xForY").innerHTML = "X for Y";

// // Creating an event listener to the "Create New Startup" button
// newCreation.addEventListener('click', function(event) {
//     event.preventDefault();
//     // If the favorites were printed, they'll be hidden now
//     favoriteList.innerHTML = "";
//     // Assigning a random value for the X and Y variables
//     var random1 = Math.floor((Math.random() * startupX.length));
//     var random2 = Math.floor((Math.random() * startupY.length));
//     // Printing the new startup in the title
//     document.getElementById("xForY").innerHTML = "A startup that is " + startupX[random1] + ", but for " + startupY[random2];
// });

// // Creating an event listener to the "Favorite Startup" button
// favCreation.addEventListener('click', function(event) {
//     event.preventDefault();
//     // If the favorites were printed, they'll be hidden now
//     favoriteList.innerHTML = "";
//     // Saving favorite startup into the array
//     favorites.push(document.getElementById("xForY").innerText);
//     console.log(favorites)
// })

// // Creating an event listener to the "Print Favorites" button
// printCreation.addEventListener('click', function(event) {
//     event.preventDefault();
//     // Printing each favorite stored in the array
//     for (var i = 0; i < favorites.length; i++) {
//         let newFave = document.createElement('li');
//         let newFaveText = document.createTextNode(favorites[i]);
//         newFave.appendChild(newFaveText);
//         favoriteList.appendChild(newFave);
//     }
// })


jQuery

// Adding a title to the page
$("#xForY").text("X for Y");
// Creating an array to capture the user's favorite startups
let favorites = [];
// Adding an unsorted list to the #favorites element to print favorite startups later
let favoriteList = $("<ul>");
$("#favorites").append(favoriteList);

// Creating an event listener to the "Create New Startup" button
$("#create").on('click', function(event) {
    event.preventDefault();
    // If the favorites were printed, they'll be hidden now
    favoriteList.html("");
    // Assigning a random value for the X and Y variables
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    // Printing the new startup in the title
    $("#xForY").text("A startup that is " + startupX[random1] + ", but for " + startupY[random2]);
});

// Creating an event listener to the "Favorite Startup" button
$("#save").on('click', function(event) {
    event.preventDefault();
    // If the favorites were printed, they'll be hidden now
    favoriteList.html("");
    // Saving favorite startup into the array
    favorites.push($("#xForY").text());
    console.log(favorites)
});

// Creating an event listener to the "Print Favorites" button
$("#print").on('click', function(event) {
    event.preventDefault();
    // Printing each favorite stored in the array
    for (var i = 0; i < favorites.length; i++) {
        let listItem = $("<li>").text(favorites[i]);
        favoriteList.append(listItem);
    };
});