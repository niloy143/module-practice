const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]

// using for loop 
let sumOfAge = 0;
for (const age of people) {
    sumOfAge += age.age;
}

console.log(sumOfAge);

// using array.reduce()
const ageArray = people.map(x => x.age);
const sumOfAgeArray = ageArray.reduce((x,y) => x+y, 0);
console.log(sumOfAgeArray);