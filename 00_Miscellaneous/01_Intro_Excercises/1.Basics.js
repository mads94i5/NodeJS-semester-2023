// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif
console.log(`My first name is ${firstName} and my last name is ${lastName}`);
// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// Add the year plus the number
// The result should be 2023
// You cannot touch line 1 or 2
const result1 = +year + number;
const result2 = Number(year) + number;
const result3 = parseInt(year) + number;
console.log(result1, result2, result3);
// --------------------------------------

// Will return NaN
console.log(Number("23a"));
console.log(+"23a");
// Will return 23:
console.log(parseInt("23a"));