// Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.

// Follow the steps below.

// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.


const divideMe = (num) => {
    while (num >= 2) {
        num--;
        let byThree = num % 3;
        let byFive = num % 5;
        let byBoth = (byThree === 0 && byFive === 0) ? 'fizzbuzz' : undefined;
        if (byBoth) {
            console.log(byBoth);
        } else if (byThree === 0) {
            console.log('fizz');
        } else if (byFive === 0) {
            console.log('buzz');
        } else {
            console.log(num);
        }
    }
}
divideMe(100)