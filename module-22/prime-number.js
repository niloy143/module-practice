/*
    Prime number can't be divided by any number except 1 and itself.
*/

const theNumber = 1084051191974761;

function isPrimeNumber(number){
    let tempNumber = Math.sqrt(number);
    if(Number.isInteger(tempNumber)){
        return false;
    }
    else {
        for(let i=2; i<tempNumber; i++) {
            if(number % i === 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(isPrimeNumber(theNumber));