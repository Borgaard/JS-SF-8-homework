var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

// var random1 = Math.floor((Math.random() * startupX.length));
// var random2 = Math.floor((Math.random() * startupY.length));

// let saying = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];




let createButton = document.querySelector("#create");

createButton.addEventListener("click", function(e) {
    e.preventDefault();
//    let pElement = document.createElement("p");
    let text = document.createTextNode('A startup that is ' + startupX[Math.floor((Math.random() * startupX.length))] + ', but for ' + startupY[Math.floor((Math.random() * startupY.length))]);
    let h1Element = document.querySelector("#xForY");
//    pElement.appendChild(text);
    h1Element.appendChild(text);
}, false);


let saved = [];
let saveButton = document.querySelector("#save");

saveButton.addEventListener("click", function(e) {
    e.preventDefault();
    saved.push(document.querySelector("#xForY").innerHTML);
    document.querySelector("#xForY").innerHTML = "";    
}, false);

let printButton = document.querySelector("#print");

printButton.addEventListener("click", function(e) {
    let h2 = document.querySelector("#favorites");
    let savedListUl = document.createElement("ul");
    for (i=0; i<saved.length; i++) {
        let text = document.createTextNode(saved[i]);
        let li = document.createElement("li");
        li.appendChild(text);
        savedListUl.appendChild(li);
        // savedListUl.appendChild(document.createElement("li").appendChild(document.createTextNode(saved[i])));
    };
    h2.appendChild(savedListUl);
}, false);

