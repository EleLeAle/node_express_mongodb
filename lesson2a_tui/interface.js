// Add your interface code below!

// 1. Import the object from logic.js that contains the functions you need.

let {
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    convertTemperature,
} = require("./logic.js");

// 2. Grab the variables you'll need from the user's input (process.argv).

// 3. Call the function that will convert the temperature, passing in the user's input.
// console.log(process.argv);
let temp = process.argv[2];
let scale = process.argv[3];

console.log(scale);
if(scale === undefined){
    console.log(fahrenheitToCelsius(temp) + 'C' + '\nor');
    console.log(celsiusToFahrenheit(temp) + 'F');
}else if(scale ==='f' || scale === 'c') {
    console.log(convertTemperature(temp, scale));
} else{
    console.log('Invalid input')
}
// 4. Print the result to the console.