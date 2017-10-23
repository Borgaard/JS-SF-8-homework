// Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice.
// Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

// 1) Write down pseudocode for the program described below.

// 2) Follow the steps in your pseudocode to write your code.
// * generate a random number between 1 - 6 and store to a variable, random1



// * combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
// var firstDie =
// dice - $ { random1 }

// * combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie
// var secondDie =
// dice - $ { random2 }

//     * get the first die by ID and update the CSS class name to firstDie
//     * get the first die by ID and update the CSS class name to secondDie

//     3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked.


var button = document.querySelector("#roll-dice");
button.addEventListener("click", function(e) {
    var random1 = Math.floor((Math.random() * 6) + 1);
    var random2 = Math.floor((Math.random() * 6) + 1);
    var firstDie = `dice dice-${random1}`;
    var secondDie = `dice dice-${random2}`;
    document.querySelector("#first-die").className = firstDie;
    document.querySelector("#second-die").className = secondDie;
});