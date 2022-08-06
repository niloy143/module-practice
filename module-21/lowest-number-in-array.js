const numberArray = [23, 53, 11, 56, 25, 12, 634];

function lowestNumber(numbers) {
    let currentLowestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if(currentLowestNumber > numbers[i]) {
            currentLowestNumber = numbers[i];
        }
        else {
            continue;
        }
    }
    return currentLowestNumber;
}

console.log(lowestNumber(numberArray));