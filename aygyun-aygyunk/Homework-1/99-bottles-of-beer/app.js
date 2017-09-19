



//99 Bottles of beer Aygyun Khaydarova 


for (i = 99; i>= 1; i--) 

{
    
    let bottleString=" bottles";

	if(i==1) {
		bottleString=" bottle"; 
	}

	let bottleString2=" bottles"; //created a second vartible for the last line decrement. 
    
    if ((i-1)==1) {
    	bottleString2=" bottle";
    }

console.log(i + bottleString + " of beer on the wall" + " " + i + bottleString + " of a beer." + " Take one down, pass it around" + " " + (i-1) +  bottleString2+ " of a beer the wall\n"); }
console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."); 


