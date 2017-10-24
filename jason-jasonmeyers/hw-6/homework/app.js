$(function() {
  // DOM ready
  _500px.init({
    sdk_key: 'eb3f537c0797d2a0355a88a56b584015a4bf96d9'
  });


  _500px.on('authorization_obtained', function() {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let radius = '2000mi';

        let searchOptions = {
          exclude_nude: 0,
          geo: lat + ',' + long + ',' + radius, // set geo query
          only: 'Landscapes', // only return landscapes
          image_size: 3,
          sort: 'rating', // sort by rating
          rpp: 25, // return 25 photos

        };

        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            console.log('No photos found!');
          } else {
            handleResponseSuccess(response);
          }
        });
      });
    } else {
      $('.images').append('Sorry, the browser does not support geolocation');
    }
  });

  function handleResponseSuccess(response) {
    let allData = response.data.photos;
    let data = response.data;
    console.log(data);

    $.each(allData, function() {

      let contDiv = $('<div>');
      let text = $('<div>').append(this.name).attr('class', 'title');
      let element = $('<img>').attr('src', this.image_url).attr('alt', text).addClass('image');
            $(contDiv).append(text);
      $(contDiv).append(element);
      $('.images').append(contDiv);
    });
  }

  $('#login').click(function() {
    _500px.login();
  });

  _500px.getAuthorizationStatus();

  $('.images').on('mouseover', function(e){
    console.log(e)
  })
});
