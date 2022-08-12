
// === (4) Simple Interest === 

function simpleInterest(principal, interestRate, time) {
    const interest = principal * (interestRate/100) * time;
    return interest;
}

const principalInput = 1000 // (TK) set principal or muldhon here.
const interestRateInput = 10 // (percent) set interest rate here. Do not include '%';
const timeInput = 2 // (year) set time here.

console.log(simpleInterest(principalInput, interestRateInput, timeInput));
