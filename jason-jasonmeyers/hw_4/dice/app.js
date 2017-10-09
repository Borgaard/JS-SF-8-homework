let die = [];

function returnRandomNumber(){
  let num = Math.ceil(10 * Math.random());
  return(num);
}

function returnTwo(){
  die.push(returnRandomNumber());
  die.push(returnRandomNumber());
  console.log(die);
}

returnTwo();
