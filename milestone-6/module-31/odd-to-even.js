const oddArr = [23, 41, 45, 13, 19, 57];

// using for loop
const evenArr = [];
for (const oddNumber of oddArr) {
    evenArr.push(oddNumber + 1);
}

console.log(evenArr);

// using array.map()
const evenArr2 = oddArr.map(x => x+1);

console.log(evenArr2);