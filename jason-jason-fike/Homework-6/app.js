$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: '4dab8e0c25a925ed69468c7858e4dd5315b2c524'
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
          page: 1,
          sort: 'highest_rating',
          rpp: 28
        };
       
        _500px.api('/photos/search', searchOptions, function (response) {
          if(response.data.photos.length === 0) {
            console.log('No Photos Found');
          } else {
            console.log(response);
            for(i = 0; i < response.data.photos.length ; i++) {
              let url = response.data.photos[i].image_url;
              $('.images').append($('<img>').addClass('image').attr('src',url));
            }
          }
        });
      });
    } else {
      $('.images').append('Sorry this browser does not support geolocation');
    };


  });

});
