$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: 'c40e0eec23e4916ba0d207b93170f27c5c2c78f4'  // From 500px profile
  });

  $('#login').on('click', function() {
    _500px.login();
  });

  _500px.on('authorization_obtained', function() {
    // alert('You have logged in');
    // console.log("Your username is " + response.user.username);

    $('.sign-in-view').hide();
    $('.image-results-view').show();

    // Get my user id
    _500px.api('/users', function (response) {
      var me = response.data;
      console.log(me);

      if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          // console.log('lat: ' + lat);
          // console.log('lng: ' + lng);
          let radius = '25mi';
          let searchOptions = {
            geo: lat + ',' + lng + ',' + radius,
            rating: 10,
            image_size: 3,
            rpp: 28,
            sort: 'rating',
            only: 'Landscapes'
          };

          // Search for the highest-rated Landscapes photos based on user location
          _500px.api('/photos/search', searchOptions, function (response) {
            // console.log(response.data.photos);
            if (response.data.length === 0) {
              console.log('No photos found.');
            } else {
              console.log('Request succeeded.');
              showImages(response.data.photos);
            }
          });
        });
      } else {
        $('.images').append('Sorry, this browser does not support geolocation');
      }
    });

  });

  // _500px.getAuthorizationStatus();

  function showImages(data) {
    console.log(data);
    data.forEach(function(el) {
      var url = el.image_url;
      // console.log('rating is ' + el.rating);
      var $imgLink = $('<a>').attr('href', url).attr('target', 'blank');
      var $imgSrc = $('<img>').attr('src', url).addClass('image');
      $imgLink.append($imgSrc);
      $('.images').append($imgLink);
    });
  }

});
