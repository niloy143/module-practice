/*
    Prime number can't be divided by any number except 1 and itself.
*/

const theNumber = 17;

function isPrimeNumber(number) {
    const maxDivident = Math.ceil(number/2);
    let tempVar = 0;
    let isPrime;
    for (let i=2; i<maxDivident; i++) {
        if(number % i === 0) {
            tempVar++;
        }
        else {
            continue;
        }
    }
    if(tempVar > 0) {
        isPrime = false;
    }
    else {
        isPrime = true;
    }
    return isPrime;
}

console.log(isPrimeNumber(theNumber));