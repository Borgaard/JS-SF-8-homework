/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice.
Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

1) Write down pseudocode for the program described below.
randomNumber1 = 6 * Math.random()
randomNumber2 = 6 * Math.random()

firstDie = "dice-1"  + randomNumber1
secondDie = "dice-2" + randomNumber2

getID(firstDie).className = "firstDie"
getID(secondDie).className = "secondDie"

2) Follow the steps in your pseudocode to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate another random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie
* get the first die by ID and update the CSS class name to firstDie
* get the first die by ID and update the CSS class name to secondDie

3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked.

*/

let rollDiceBtn = document.querySelector('#roll-dice');

rollDiceBtn.addEventListener('click', function() {
  // console.log("Got the dice!");

  // Generate a random number between 1 - 6 and store to a variable, random1 & random2
  let randomNumber1 = Math.ceil(Math.random() * 6);
  // console.log("Dice 1: " + randomNumber1);
  let randomNumber2 = Math.ceil(Math.random() * 6);
  // console.log("Dice 2: " + randomNumber2);

  // Combine 'dice-' and random1 & random2 to form the CSS class name to use for the first die, firstDie and the secondDie, secondDie
  let firstDie = "dice-" + randomNumber1;
  console.log("First Die class: " + firstDie);
  let secondDie = "dice-" + randomNumber2;
  console.log("Second Die class: " + secondDie);

  // Get the first & second die by ID and update the CSS class name to firstDie and secondDie
  let firstDieClass = document.querySelector('#first-die');
  let secondDieClass = document.querySelector('#second-die');
  firstDieClass.className = firstDie;
  secondDieClass.className = secondDie;
}, false);
