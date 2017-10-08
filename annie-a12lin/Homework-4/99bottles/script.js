let button = document.querySelector("#drink");
let bottlesArray = [99];
let list = document.querySelector("#lyrics");



button.addEventListener("click", function() {
    bottlesArray.push(bottlesArray[bottlesArray.length-1] - 1);
    if (bottlesArray[bottlesArray.length-1] > 1) {
        let text = document.createTextNode("Take one down, pass it around, " + bottlesArray[bottlesArray.length-1] + " bottles of beer on the wall. " + bottlesArray[bottlesArray.length-1] + " bottles of beer on the wall, " + bottlesArray[bottlesArray.length-1] + " bottles of beer!");
        let li = document.createElement("li");
        li.appendChild(text);
        list.appendChild(li);
    }
    else if (bottlesArray[bottlesArray.length-1] === 1) {
        let text = document.createTextNode("Take one down, pass it around, " + bottlesArray[bottlesArray.length-1] + " bottle of beer on the wall. " + bottlesArray[bottlesArray.length-1] + " bottle of beer on the wall, " + bottlesArray[bottlesArray.length-1] + " bottle of beer!");
        let li = document.createElement("li");
        li.appendChild(text);
        list.appendChild(li);
    }
    else if (bottlesArray[bottlesArray.length-1] === 0) {
        let text = document.createTextNode("Take one down, pass it around, " + bottlesArray[bottlesArray.length-1] + " bottle of beer on the wall. " + "No more bottles of beer on the wall, no more bottles of beer!!!");
        let li = document.createElement("li");
        li.appendChild(text);
        list.appendChild(li);
    }
    else { };
    /*
    for (i=99; i>=0; i--) {
        bottlesArray.push(i);
        let text = document.createTextNode(bottlesArray[bottlesArray.length-1] + " bottles of beer on the wall");
        let li = document.createElement("li");
        li.appendChild(text);
        list.appendChild(li);
    };
    */
}, false);

