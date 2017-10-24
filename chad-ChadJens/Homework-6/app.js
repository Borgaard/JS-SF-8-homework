$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: ''
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
  			let radius = '25mi';
        let sorting = 'rating';
        let numResults = 28;
  			let searchOptions = {
  				geo: lat + ',' + long + ',' + radius,
  				only: 'Landscapes',
          sort: sorting,
          rpp: numResults
  			};
  			//console.log('lat: ' + lat + '\nlong: ' + long);
  			_500px.api('/photos/search', searchOptions, function(response) {
  				//console.log(response.data.photos);
  				if (response.data.photos.length === 0) {
  					console.log('No pics');
  				} else {
  					console.log('Yes pics');
            let userLocBlob = $('<h4>').text('Lat: ' + lat + '\nLong: ' + long);
            $('.image-results-view h3').append(userLocBlob);
            for (let i = 0; i < response.data.photos.length; i++) {  
              let newImg = $('<img>');
              newImg.attr('src', response.data.photos[i].image_url);
              $('.images').append(newImg);
            }
  				}
  			})
  		})
  	} else {
  		$('.images').append('Download Google Chrome');
  	}
  });
});