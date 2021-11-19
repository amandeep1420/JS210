// let rlSync = require('readline-sync');
// let firstNumber  = parseInt(rlSync.question('==> Enter the first number: '));
// let secondNumber = parseInt(rlSync.question('==> Enter the second number: '));

// console.log(`==> ${firstNumber} + ${secondNumber} = ${ firstNumber + secondNumber}`);
// console.log(`==> ${firstNumber} - ${secondNumber} = ${ firstNumber - secondNumber}`);
// console.log(`==> ${firstNumber} * ${secondNumber} = ${ firstNumber * secondNumber}`);
// console.log(`==> ${firstNumber} / ${secondNumber} = ${ firstNumber / secondNumber}`);
// console.log(`==> ${firstNumber} % ${secondNumber} = ${ firstNumber % secondNumber}`);
// console.log(`==> ${firstNumber} ** ${secondNumber} = ${ firstNumber ** secondNumber}`);

const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());
