// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const result1 = +numberOne + +numberTwo;
console.log(result1);
// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const result2 = parseFloat(+anotherNumberOne + +anotherNumberTwo).toFixed(2);
console.log(result2);
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const average = parseFloat((one + two + three) / 3).toFixed(5);
console.log(average);
// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";

// Get me the character "c"

const lastLetter = letters.charAt(letters.length - 1);
console.log(lastLetter);
// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const capitalized = fact.substring(0, 17) + fact.charAt(17).toUpperCase() + fact.substring(18);
console.log(capitalized);
// --------------------------------------