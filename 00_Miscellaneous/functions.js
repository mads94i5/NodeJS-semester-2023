// hoisting; functionen bliver læst og kan kaldes før den er deklareret
console.log(getRandomInt(5, 10));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
// logger fuction reference
console.log(getRandomInt);
// logger random nummer
console.log(getRandomInt(5, 10));

// anonym function
const getRandomIntAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

// arrow function
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
// arrow function no return
const getRandomIntArrowFunctionNoReturn = (min, max) => 
    Math.floor(Math.random() * (max + 1 - min) + min);

// callback function - any reference to execute code that is passed as an argument in another piece of code
function genericActionperformer(genericAction, name) {
    // do things..
    return genericAction(name);
}

// jump er en callback arrow function
const jump = (name) => `${name} is jumping`;

// run er en callback anonymous function
const run = function (name) { return `${name} is running`; }

console.log("Callback:")
console.log(genericActionperformer(jump, "Mads"));
console.log(genericActionperformer(run, "Mads"));
// inline function
console.log(genericActionperformer((name) => `${name} is sleeping`, "Mads"));