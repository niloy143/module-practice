const numbers = [1, 9, 17, 22];

// with for loop
let sum = 0;
for(const number of numbers) {
    sum += number;
}

console.log(sum);

// with array.reduce()
const sumOfNumbers = numbers.reduce((x,y) => x+y, 0);

console.log(sumOfNumbers);