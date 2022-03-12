// To create a BMI calculator
// BMI = weight / (height**2)
// Type "npm i readline-sync" on TERMINAL to install readline-sync
// Reverence sourse link: https://www.npmjs.com/package/readline-sync

var readlineSync = require('readline-sync');
var weight = readlineSync.question('What is your weight (in kg)? ');  // const weight = 88 // in kg
var height = readlineSync.question('What is your height (in m)? ');  // const height = 1.8 // in m

BMI = weight / (height ** 2)

function bmiCalculator(BMI) {
    if (BMI >= 30) {
        return "Obese";
    } else if (BMI >= 25 && BMI <= 29.9) {
        return "Overweight";
    } else if (BMI >= 18.5 && BMI <=24.9) {
        return "Normal";
    } else {
        return "Underweight";
    }
}

console.log(bmiCalculator(BMI))


// Output:

// What is your weight (in kg)? 88
// What is your height (in m)? 1.8
// Overweight
