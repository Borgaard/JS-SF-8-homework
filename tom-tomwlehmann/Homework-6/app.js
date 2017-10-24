$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: 'Toms SDK key'
  });
  $('#login').on('click', function() {
    _500px.login();
  });
  _500px.on('authorization_obtained', function () {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log('lat: ' + lat);
        console.log('long: ' + long);
        let radius = '25mi';
        let searchOptions = {
        	geo: lat + ',' + long + ',' + radius,
        	only: 'Landscapes',
        	//increasing num of images to 28, and sorting by rating descending
        	rpp: 28,
        	sort: 'rating'
        };
        _500px.api('/photos/search', searchOptions, function (response) {
        	if (response.data.photos.length === 0) {
        		console.log('Sorry brah');
        	} else {	
        		//data to display images on webpage goes here
        		for (let i = 0; i < response.data.photos.length; i++) {
        			let $image = $('<img>').attr('src', response.data.photos[i].image_url);
        			$('.images').append($image);
        		}
        	}
		});
      })
    } else {
    	console.log('hello');
      $('.images').append('Sorry, this browser does not support geolocation');
    }
  });
});