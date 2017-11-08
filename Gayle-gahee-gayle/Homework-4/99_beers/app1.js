let body = document.querySelector('body');

let heading = document.createElement('h1');
let headingText = document.createTextNode("99 Bottles of Beer on the Wall");
heading.appendChild(headingText);
body.appendChild(heading);


let bottleString=" bottles";
let bottleString2=" bottles";

for (i = 99; i>= 1; i--){
	if(i===1){bottleString=" bottle";
		}
	if ((i-1)===1) {
    	bottleString2=" bottle";
    }

	let songLine = document.createElement('li');
	let lineText = document.createTextNode(i + bottleString + " of beer on the wall" + " " + i + bottleString + " of a beer." + " Take one down, pass it around" + " " + (i-1) +  bottleString2+ " of a beer the wall\n");

	songLine.appendChild(lineText);
	body.appendChild(songLine);
};


	let lastLine = document.createElement('li');
	let lastText = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");

lastLine.appendChild(lastText);
body.appendChild(lastLine);
