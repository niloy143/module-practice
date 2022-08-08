/*
    As area should be calculated with hands and hands can be any number, so it's considered as an isosceles triangle. formula: sqrt(s(s-a)(s-b)(s-c)).
*/

let firstHand = 40;
let secondHand = 50;
let thirdHand = 34;

function triangleArea(firstHand, secondHand, thirdHand) {
    const porisima = (firstHand + secondHand + thirdHand) / 2;
    const ketrofol = Number((Math.sqrt(porisima * (porisima - firstHand) * (porisima - secondHand) * (porisima - thirdHand))).toFixed(2)); // sorry for doing many things in one line;
    return ketrofol;
}

console.log(triangleArea(firstHand, secondHand, thirdHand));