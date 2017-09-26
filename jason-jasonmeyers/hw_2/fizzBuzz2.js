const arr = [];

for(let i = 1; i < 101; i++) {
  arr.push(i);
}

const fizBazTernary = arr => arr.map(num => (!(num % 3) && !(num % 5)) ? 'fizzBuzz' : (!(num % 3)) ? 'fizz' : (!(num % 5)) ? 'buzz' : num);

console.log(fizBazTernary(arr));
