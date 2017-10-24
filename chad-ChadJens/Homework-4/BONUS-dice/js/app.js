/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. 
Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

1) Write down pseudocode for the program described below.

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
    let random1 = Math.floor(Math.random() * (6 - 1) + 1);
    let random2 = Math.floor(Math.random() * (6 - 1) + 1);

    let firstDie = 'dice-' + random1;
    let secondDie = 'dice-' + random2;

    let dieOneElement = document.querySelector('#first-die');
    let dieTwoElement = document.querySelector('#second-die');

    dieOneElement.className = firstDie;
    dieTwoElement.className = secondDie;

})
