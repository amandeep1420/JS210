// function getNum(prompt) {
//   let rlSync = require('readline-sync');
//   let stringNum = rlSync.question(prompt);
//   return Number(stringNum);
// }

// let firstNum = getNum("Enter the first number: ");
// let secondNum = getNum("Enter the second number: ");
// console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);


function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);