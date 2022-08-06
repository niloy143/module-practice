const num1 = 93847598;
const num2 = 94857454;
const num3 = 34597384;

function maxNumber() {
    let maxValue;
    if (num1 > num2 && num1 > num3) {
        maxValue = num1;
    }
    else if (num2 > num1 && num2 > num3) {
        maxValue = num2;
    }
    else if (num3 > num1 && num3 > num2) {
        maxValue = num3;
    }
    else {
        maxValue = 'a dun gettham, ama robot.'
    }
    return maxValue;
}

console.log('Max Number is ', maxNumber());