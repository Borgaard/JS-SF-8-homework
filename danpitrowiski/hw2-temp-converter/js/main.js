
var celsius = 0;
var farenheit = 0;


$('#fahrenheit_to_celsius').click( function(){
   if ($.isNumeric( $( '#temperature' ).val())){
      farenheit = $( '#temperature' ).val();
      celsius = Math.round((farenheit - 32) / 1.8);
      $('#result').empty().append(farenheit + " farenheit is "+celsius+" celsius");
      $( '#temperature' ).val("");
      backgroundChange();
   } else (printError());
});

$('#celsius_to_fahrenheit').click( function(){
   if ($.isNumeric( $( '#temperature' ).val())){
      celsius = $( '#temperature' ).val();
      farenheit = Math.round((1.8 * celsius) + 32);
      $('#result').empty().append(celsius + " celsius is "+farenheit+" farenheit");
      $( '#temperature' ).val("");
      backgroundChange();
   } else (printError());
});


var backgroundChange = function(){

   resetUI();

   if (celsius <= 0 || farenheit <= 32){
      $( 'body' ).css('background','#4A90E2');
      $( 'canvas' ).css('display','inherit');
      $( '.sun' ).css('opacity','0');
   }
   else if (celsius >= 38 || farenheit >= 100){
      $( 'body' ).css('background','#D04C02');
      $( '.sun' ).css('display','block');
      $( '.sun' ).css('opacity','1');
      $( '.cactus').addClass('move-in');
      $( '.cactus').css('display','inherit');
      $( '.cactus').removeClass('hide');
      $( '.cloud').css('opacity','0');
   }
   else if (celsius >= 18 || farenheit >= 65){
      $( 'body' ).css('background','#FF8C2A');
      $( '.sun' ).css('display','block');
      $( '.sun' ).css('opacity','.7');
      $( '.beach-chair' ).addClass('move-in');
      $( '.beach-chair' ).css('display','inherit');
      $( '.beach-chair' ).removeClass('hide');
      $( '.beach' ).addClass('move-in');
      $( '.beach').css('display','inherit');
      $( '.cloud1').css('opacity','0');
      $( '.cloud2').css('opacity','0');
      $( '.cloud4').css('opacity','0');
   }
   else if (celsius > 0 || farenheit > 32){
      $( 'body' ).css('background','#A3CDFF');
      $( '.sun' ).css('display','block');
      $( '.sun' ).css('opacity','.3');
      $( '.cloud2').css('opacity','0');
   }
}



var resetUI = function(){
   numberFlakes = 100;
   $( 'canvas' ).css('display','none');
   $( '.cactus').removeClass('move-in');
   $( '.cactus').addClass('roll-out');
   $( '.cactus').addClass('hide');
   $( '.beach-chair').removeClass('move-in');
   $( '.beach-chair').addClass('roll-out');
   $( '.beach-chair').addClass('hide');
   $( '.beach').css('display','none');
   $( '.cloud').css('opacity','1');
   $( '.cloud1').css('opacity','1');
   $( '.cloud2').css('opacity','1');
   $( '.cloud3').css('opacity','1');
   $( '.cloud4').css('opacity','1');
   $( '#temperature').removeClass('error');
}

var printError = function(){
   $('#result').empty().append("Try again");
   $( '#temperature').addClass('error');
}

// Snow
// -------------------

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var W = $( document ).width();
var H = $( document ).height();
canvas.width = W;
canvas.height = H;

var numberFlakes = 100;
var flakes = [];
for (var i = 0; i < numberFlakes; i++) {
  flakes.push({
    x: Math.random()*W,
    y: Math.random()*H,
    radius: Math.random()*8+1
  })
}

function drawFlakes() {
  // Have to clear it every time to redraw
  ctx.clearRect(0, 0, W, H);

  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.beginPath();
  for (var i = 0; i < numberFlakes; i++) {
    var f = flakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.radius, 0, Math.PI*2, true);
  }
  ctx.fill();
  moveFlakes();
}

var angle = 0;
function moveFlakes() {
  angle += 0.01;
  for (var i = 0; i < numberFlakes; i++) {
    var f = flakes[i];
    // cos and sin for moving diagonally
    f.y += Math.cos(angle) + 1 + f.radius/2;
    f.x += Math.sin(angle) * 2;

    //Start flakes over at top
    if (f.x > W+5 || f.x < -5 || f.y > H) {

      // Introduces some more random behavior to make the snowfall look real
      if (i%3 > 0) {
        flakes[i] = {x: Math.random()*W, y: -10, radius: f.radius};
      } else {
        // flake leaves from right
        if (Math.sin(angle) > 0) {
          // come in from left
          flakes[i] = {x: -5, y: Math.random()*H, radius: f.radius};
        } else {
          //come in from right
          flakes[i] = {x: W+5, y: Math.random()*H, radius: f.radius};
        }
      }
    }
  }
}

function init() {
  drawFlakes();
}
setInterval(init, 30);

