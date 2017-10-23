$(document).ready(function() {


    var favoriteStartups = [];
    $('#create').on('click', function(e) {
        var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
        var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

        var random1 = Math.floor((Math.random() * startupX.length));
        var random2 = Math.floor((Math.random() * startupY.length));
        e.preventDefault();
        $('#xForY').html(' ');
        $('#xForY').html(`A startup that is ${startupX[random1]}, but for ${startupY[random2]}`);
    });
    $("#save").on('click', function() {
        favoriteStartups.push($('#xForY').text());
        console.log(favoriteStartups);
    });
    $("#print").on('click', function() {
        $("#favorites").append('<ul id="favoritesList"></ul>')
        favoriteStartups.forEach(function(favorite) {
            $("#favoritesList").append(`<li>${favorite}</li>`);
        })
    })
});