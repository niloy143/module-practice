
// === (2) Fahrenheit to Celsius === 

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}

const fahrenheitInput = 84.2; // set the fahrenheit here to get the celsius.
console.log(fahrenheitToCelsius(fahrenheitInput));
