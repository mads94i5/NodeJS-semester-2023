// use const if the variable should not change in runtime
const scheduledBreaktime = "09:40"
let consoleLogCounter = 0;

// use comma in console log to not use type coersion
// Will use type coersion:
console.log("Breaktime at: " + scheduledBreaktime);
consoleLogCounter++;
// Will NOT use type coersion:
console.log("Breaktime at:", scheduledBreaktime);
consoleLogCounter++;

// Types/Data konstrukt:
// Data typer:
// String, Number, Boolean, BigInteger, undefined, null, Object, Symbol
// Data strukturer:
// Object: Object, Array, Date

// Type Coercion
// JavaScript fortolker typer. Eksempelvis bliver number fortolket til string når du plusser med en String:
// 2 + "2" = 22 

// The 3 ways to make strings
// If I need single quotes:
console.log("This is the 'first' way");
// If I need double quotes:
console.log('This is the "second" way');
// If I need both or variable in the middle or need multi-line:
console.log(`This is the "${2+1}rd' way - ${scheduledBreaktime} is the break time.
this 
is
multi-line`);
consoleLogCounter += 3;

console.log("Counter:", consoleLogCounter);