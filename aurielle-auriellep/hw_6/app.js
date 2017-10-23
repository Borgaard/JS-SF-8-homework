$(function() {
    _500px.init({
        sdk_key: YOUR_SDK_KEY,
    });

    $('#login').on('click', function() {
        _500px.login();

    });
    _500px.on('authorization_obtained', function() {
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
                    geo: `${lat},${long},${radius}`,
                    only: 'Landscapes',

                };
                _500px.api('/photos/search', searchOptions, function(response) {
                    const photoArray = response.data.photos;
                    for (const photo of photoArray) {
                        $('.images').append(`<img src='${photo.image_url}' alt='${photo.description}' class='image'>`)
                    };

                });
            })


        } else {
            $('.images').append('Sorry, this browser does not support geolocation');
        }
    });
    $(window).load(function() {
        $(".bg_load").fadeOut("slow");
        $(".wrapper").fadeOut("slow");
    })

});

$(window).load(function() {
    $('.loader').fadeOut();
});