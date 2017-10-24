

/*

99 Bottles of Beer in the browser window:
Remember the 99 Bottles of Beer assignment? For this assignment, you'll be creating a website that programatically displays the lyrics to that song in the browser window.
You'll need to create both an HTML file and a JavaScript file.
In your HTML file, you'll want to have an unordered list (<ul>) that contains all of your lyrics.
Each line of the song should appear inside of a list item (<li>) within that unordered list.
Your JavaScript file should programatically append each line of the song to the page--no hard-coding lyrics in HTML!
Code this project using vanilla JavaScript methods.
Then refactor your code to use jQuery instead (preserving your original code in comments */ 


let bottleString=" bottles";

for (i = 99; i>= 1; i--) 

{ 
	if(i===1) 

	{
		bottleString=" bottle"; 

	}

	let bottleString2=" bottles"; 

    if ((i-1)===1) {
    	bottleString2=" bottle";
    
    }

	let songLine = document.createElement('li');
	
	let lineText = document.createTextNode(i + bottleString + " of beer on the wall" + " " + i + bottleString + " of a beer." + " Take one down, pass it around" + " " + (i-1) +  bottleString2+ " of a beer the wall\n");
	songLine.appendChild(lineText);

	document.getElementById("lyrics").appendChild(songLine); 
};  


let songLine = document.createElement('li'); // pint out the last line. 

let lineText = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
songLine.appendChild(lineText);
document.getElementById("lyrics").appendChild(songLine); 

  


// I can also use songLine.innerHTML = i + bottleString + " of beer on the wall" + " " + i + bottleString + " of a beer." + " Take one down, pass it around" + " " + (i-1) +  bottleString2+ " of a beer the wall\n";




