
// === (4.5) Compound Interest === 

function compoundInterest(principal, interestRate, time, compoundCount) {
    const interest = (principal * ((1+((interestRate/100)/compoundCount))**(time*compoundCount))) - principal;
    return interest;
}

const principalInput = 1000 // (TK) set principal or muldhon here.
const interestRateInput = 10 // (percent) set interest rate here. Do not include '%';
const timeInput = 2 // (year) set time here.
const compoundCountInput = 1 // (times) set how many times rate should be compounded in year;

console.log(compoundInterest(principalInput, interestRateInput, timeInput, compoundCountInput));