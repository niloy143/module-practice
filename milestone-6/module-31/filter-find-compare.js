const arr = [33, 50, 79, 78, 90, 101, 30];

// with filter method
const findDivisible = arr.filter(x => x%5 === 0);

// with find method
const filterDivisible = arr.find(x => x%5 === 0);

console.log(findDivisible, filterDivisible);