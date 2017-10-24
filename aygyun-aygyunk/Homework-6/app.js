$(function() {

  _500px.init({
    sdk_key: '' //sdk_key: 'YOUR JAVASCRIPT SDK KEY'
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
          rpp: 28, //rpp — The number of results to return. Can not be over 100, default 20.
          sort: "highest_rating" //'highest_rated' — Return photos that have been in Popular. Default sort: highest_rating.
        };


        _500px.api('/photos/search', searchOptions, function (response) {
          
          if(response.data.photos.length === 0){

          	console.log('No photos found');
          } else {
            console.log(response.data.photos);
        let allData = response.data.photos;

     $.each(allData, function() {
      let element = $('<img>').attr('src', this.image_url).addClass('image');
      $('.images').append(element);


        });


    }

        });

       })

    } else {
      $('.images').append('Sorry, this browser does not support geolocation');
    }
       });
  

  
  $('#login').click(function() {
    _500px.login();

  });

  _500px.getAuthorizationStatus();
});



