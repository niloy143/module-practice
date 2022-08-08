const numbers = [34, 532, 432, 342, -65, 123, 54, 64, -234];
const positiveNumbers = [];

function onlyPositive(numbers){
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] < 0) {
            break;
        }
        positiveNumbers.push(numbers[i]);
    }
    return positiveNumbers;
}

console.log(onlyPositive(numbers));