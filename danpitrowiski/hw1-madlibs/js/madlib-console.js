var startupX = [
'Uber',
'Google',
'Amazon',
'Apple',
'Facebook',
'Twitter',
'Wootric',
'Invision',
'General Assembly',
'Doge',
'Party Parrot'
];

var startupY = [
' Hyperloop',
' Harvest',
'.io',
'.ai',
'.ly',
'.xxx',
' iOS',
' Android',
' Social Network'
];

var tempFav;
var favorite = [""];
var stopSaving = 0;

function random(array){
	return arrayNumber = Math.floor((Math.random() * array.length))
};

$('#create').click( function(){
	// Adding the title, hiding favorites, and showing xForY
	$( "#listTitle" ).empty().prepend("<h3>New Startup Names</h3>");
	$( "#xForY" ).css('display','block');
	$( "#favorites" ).css('display','none');
	$( "#save" ).css('display','inline');
	$( "#print" ).css('display','inline');
	stopSaving = 0; //can save again

	// saving the last random name so it can be saved later
	var fav1 = random(startupX);
	var fav2 = random(startupY);
	tempFav = startupX[fav1] + startupY[fav2];

	// displaying the random name
	$( "#xForY" ).prepend( "<p>"+startupX[fav1]+startupY[fav2]+"</p>" );
});

$('#save').click( function(){
	//limiting the user to saving this just once
	if (stopSaving === 0){
		favorite[favorite.length] = tempFav;
		$( "#xForY p:first-child" ).append("<span class='green'> saved</span>");
	}
	stopSaving = 1; //stop saving
});

$('#print').click( function(){
	// Adding the title, hiding xForY, and showing favorites
	$( "#listTitle" ).empty().prepend("<h3>Favorites Startup Names</h3>");
	$( "#favorites" ).empty().css('display','block');
	$( "#xForY" ).css('display','none');
	$( "#save" ).css('display','none');
	$( "#print" ).css('display','none');

	// Show all names in the favorites array
	for (i=(favorite.length-1);i>0;i--){
		$( "#favorites" ).append( "<p>"+favorite[i]+"</p>" );
	}
});