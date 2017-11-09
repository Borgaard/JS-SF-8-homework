$(function() {
  // DOM is now ready

  _500px.init({
    sdk_key: '628294a7648a4375b0b5390f75e4ea659b1c34b0'
  });

  $('#login').on('click', function(){
  	_500px.login();
  })

  _500px.on('authorization_obtained', function () {
    $('.sign-in-view').hide();
    $('.image-results-view').show();
    //alert('You have logged in');

    if(navigator.geolocation){
    	navigator.geolocation.getCurrentPosition(function(position){
    		let lat = position.coords.latitude;
    		let long = position.coords.longitude;
    		console.log(lat);
    		console.log(long);

    		let radius = '25mi';

    		let searchOptions = {
    			geo: lat + ',' + long + ',' + radius,
    			only: 'Landscapes',
                rpp: '28',
                sort: 'rating'
    		};

            _500px.api('/users', function(response){
                let userFirstName = response.data.user.firstname;
                console.log(response);
                console.log(userFirstName);
                let userElement = $('<h2>').html('Hello ' + userFirstName + '!');
                $('h1').append(userElement);
            })

    		_500px.api('/photos/search', searchOptions, function (response){
    			//console.log(response.data.photos);
    			if(response.data.photos.length === 0){
    				console.log('No photos found');
    			} else{
    				console.log('Request succeeded');
    				console.log(response.data.photos);
    				let imgArray = response.data.photos;
    				console.log(imgArray[0].image_url);
    				imgArray.forEach(function(e){
                        let imageId = e.id;
                        let imageUrl = e.image_url;
                        console.log(imageId);
                        console.log(imageUrl);
                        console.log(e.rating);
                        let imageElement = $('<img>').attr('id', imageId).attr('src', imageUrl).addClass('image');
                        $('.images').append(imageElement);
    				})
    			}
			});
    	})
    } else{
    	$('.images').append('Sorry, this browser sucks!');
    }






  });

});

