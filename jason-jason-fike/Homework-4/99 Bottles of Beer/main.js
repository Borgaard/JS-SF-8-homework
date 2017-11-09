/*
// Vanilla Javascript

let button = document.querySelector('#drinkBeer');
let list = document.querySelector('#list');

button.addEventListener('click', function(e) {
    e.preventDefault;
    for(i = 99; i >= 0; i--) {
        let li = document.createElement('li');
        let text;
        if(i === 1) {
            text = document.createTextNode(i + " bottle of beer on the wall " + i + " bottle of beer. Take one down, pass it around, no more bottles of beer on the wall." );
        } else if (i === 2) {
            text = document.createTextNode(i + " bottles of beer on the wall " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottle of beer on the wall." )
        } else if (i === 0) {
            text = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
        } else {
            text = document.createTextNode(i + " bottles of beer on the wall " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottles of beer on the wall.");
        };
        li.appendChild(text);
        list.appendChild(li);
    };
});
*/

$('#drinkBeer').on('click', function(e) {
    e.preventDefault;
    for(i = 99; i >= 0; i--) {
        let li;
        if(i === 1) {
            li = $('<li>').text(i + " bottle of beer on the wall " + i + " bottle of beer. Take one down, pass it around, no more bottles of beer on the wall." );
        } else if (i === 2) {
            li = $('<li>').text(i + " bottles of beer on the wall " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottle of beer on the wall." );
        } else if (i === 0) {
            li = $('<li>').text("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        } else {
            li = $('<li>').text(i + " bottles of beer on the wall " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottles of beer on the wall.");
        };
        $('#list').append(li);
    };

})