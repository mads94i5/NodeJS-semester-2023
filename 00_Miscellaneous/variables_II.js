// Strict mode:
"use strict";

// totalGlobalVariable = "Never do this!";
var globalVariable = "Also never do this!";

// global scope
console.log(globalVariable);

// const:
// ikke en constant, block scope, skal initialiseres men kan ikke redeclares:

// cant do this:
//const isThisConstant = 123;
// isThisConstant = 456;

// cant do this: 
// const isThisConstant

// array
const isThisConstant = [];
isThisConstant.push(1, 2, 3);
console.log(isThisConstant);

// object
const anotherConstant = {}
anotherConstant.valueChange = true;
console.log(anotherConstant);

// anden var overskriver første
// var test
// var test
// kan ikke redeclare let i samme scope
// let test2
// let test2

// function scope
function anotherScope() {
    console.log("Function scope");
}

// block scope
{
    console.log("Block scope");
    var someVariable = true;
    {
        var someVariable = false;

    }
    // var går ud over scope og someVariable bliver log'et som false
    console.log(someVariable);
}

{
    console.log("Block scope");
    let someVariable = true;
    {
        let someVariable = false;

    }
    // let forbliver i scope
    console.log(someVariable);
}
// var er i globalt scope og i påvirker den globale var og du får 6, 6 gange
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

// løsningen for at få hvad man forventer af en sådan loop er at bruge let
for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}
