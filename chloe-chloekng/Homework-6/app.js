$(function() {
  // DOM is now ready (shortcut for not running the code until dom is ready)
  _500px.init({
    sdk_key: '73d96f77a0ea5ae67d7b0ee2e7be830851f95659'
  });

  $('#login').on('click', function() {
  	_500px.login();
  });

  let images = document.querySelector(".images");
  images.className = "images";
  console.log(images);


  _500px.on('authorization_obtained', function () {
    // alert('You have logged in');
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(function(position) {
    	let lat = position.coords.latitude;
    	let long = position.coords.longitude; 
    	console.log('lat: ' + lat);
    	console.log('long: ' + long);

    	let radius = '25mi';
    	let searchOptions = {
    		geo: lat + ',' + long + ',' + radius,
    		only: 'Landscapes',
        sort: 'highest_rating',
        rpp: 28
    	};

    	_500px.api('/photos/search', searchOptions, function(response) {
          console.log(response.data.photos);
          if (response.data.photos.length === 0) {
          	console.log('No photos found');
          } else {
          	console.log('Request succeeded');
            for (let i = 0; i < response.data.photos.length; i++) {
                let newImage = document.createElement("img");
                newImage.className = "image";
                console.log(newImage);
                newImage.src = response.data.photos[i].image_url;
                images.append(newImage);
                console.log("hey");

            }
        
          }

        });




    	})
    } else {
    	$('.images').append('Sorry, this browser does not support geolocation');
    }
  });




});



