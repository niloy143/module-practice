const numbers = [32, 23, 12, 21, 13, 31];

const squareAverage = (arrName) => {
    let squareSum = 0;
    for (let i=0; i<arrName.length; i++) {
        arrName[i] = arrName[i] ** 2;
        squareSum += arrName[i];
    }
    return squareSum / arrName.length;
}

console.log(squareAverage(numbers));