$(function() {

	_500px.init({
	sdk_key: 'XXXXXXXXXXXXXXXXXXXXX'
	});

	$('#login').on('click', function(){
		_500px.login();
	});

	_500px.on('authorization_obtained', function () {
    	alert('You have logged in');
    	$('.sign-in-view').remove();
    	$('.image-results-view').show();

    	if(navigator.geolocation) {
    		navigator.geolocation.getCurrentPosition(function(position){
    			var lat = position.coords.latitude;
    			var long = position.coords.longitude;
    			console.log("Lat: " + lat);
    			console.log("Long: " + long);

    			let radius = '25mi';
    			let searchOptions = {
    				geo: lat + ',' + long + ',' + radius,
    				only: 'Landscapes',
    				rpp: 28,
    				sort: 'highest_rating',
    			};

				_500px.api('/photos/search', searchOptions, function (response) {
					console.log(response.data.photos);
					for (let i=0; i<response.data.photos.length; i++) {
  						$('.images').append('<img class="image" src="'+response.data.photos[i].image_url+'">');
					}
				});

				_500px.api('/users', function (response) {
					console.log(response.data.user);
					$('#user').html(", "+response.data.user.username);
				});
    		})
    	}else(
    			$('.images').append("Sorry bud, it's not working right now")
    		);
	});
});

