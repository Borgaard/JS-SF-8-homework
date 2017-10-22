var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var madlib = "";
var savedMadlibs = [];

$('#create').on('click', function(){
	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));

	madlib = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
	console.log(madlib);

	$('#xForY').html(madlib);
})

$('#save').on('click', function(){
	if(madlib === ""){
		$('#xForY').html("You haven't created a madlib yet!");
	} else {
		savedMadlibs.push(madlib);
		console.log(savedMadlibs);
	}
})

$('#print').on('click', function(){
	$('#favorites').html(savedMadlibs);
})