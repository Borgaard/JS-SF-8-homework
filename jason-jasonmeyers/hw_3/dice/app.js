let die = [];
let app = document.getElementById('app');

function returnRandomNumber(){
  let num = Math.ceil(6 * Math.random());
  console.log(num);
  return(num);
}

function appDraw(array){
  array.forEach(function(i){
    var path = "img/";
    var img = document.createElement('img');
    img.src = path + i + ".png";
    app.appendChild(img);
  })
}

function returnTwo(){
  die.push(returnRandomNumber());
  die.push(returnRandomNumber());
  console.log(die);
  appDraw(die);
}

returnTwo();
