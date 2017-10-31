$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: '85324006f3cf813f9b41d52ca63d6c2fde4f2be4'
  });

  $("#login").on("click", function() {
    _500px.login();
  });

  _500px.on('authorization_obtained', function () {
    // alert('You have logged in');
    $(".row").hide();
    $(".image-results-view").show();

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log("lat: " + lat);
        console.log("long: " + long);

        let radius = "25mi";

        let searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes',
          rpp: 28,
          sort: "rating"
        };

        _500px.api('/users', function (response) {
          console.log(response);
          let userName = response.data.user.fullname;
          let userText = "Hi " + userName + ", you are successful logged in. Your coordinates are " + lat + " (latitude) x " + long + " (longitutde).";
          $(".images").append(userText);
        });

        // _500px.api('/photos/search', { geo: '37.77,-122.42,100mi', page: 1 }, function (response) {
        _500px.api('/photos/search', searchOptions, function (response) {
          if(response.data.photos.length === 0) {
            console.log("No photos found.");
          }
          else {
            for (let i=0; i < response.data.photos.length; i++) {
              // console.log(response.data.photos[i].image_url);
              let url;
              url = response.data.photos[i].image_url;
              $(".images").append($("<img>").addClass("image").attr("src",url));
            };
          
          };
      });
});
}
    else {
      $(".images").append("Sorry, this browser doesn't support geolocation.");
      // console.log("error!");
    };



    })})
