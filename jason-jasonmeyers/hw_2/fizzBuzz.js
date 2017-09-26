
let ceiling = 100;
let a = 1;

function isFizzBuzz(number) {
  if ((number % 5 === 0) && (number % 3 === 0)) {
    return 'FizzBuzz';
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return number;
  }
}

while (a <= ceiling) {
  console.log(isFizzBuzz(a));
  a++;
}
