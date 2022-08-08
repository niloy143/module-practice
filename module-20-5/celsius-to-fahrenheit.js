// === (1) Celsius to Fahrenheit === 

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}

const celsiusInput = 29; // set the celsius here to get the fahrenheit.
console.log(celsiusToFahrenheit(celsiusInput));
