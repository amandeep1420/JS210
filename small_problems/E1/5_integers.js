let rlSync = require('readline-sync');

let number = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
let sumOrProduct = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let total;
let operation = '';

if (sumOrProduct === 's') {
  operation = 'sum';
  total = 0;
  for (let currentNum = 1; currentNum <= number; currentNum += 1) {
    total += currentNum;
  } 
} else {
  operation = 'product';
  total = 1;
  for (let currentNum = 1; currentNum <= number; currentNum += 1) {
    total *= currentNum;
  }
}

console.log(`The ${operation} of the integers betweeen 1 and ${number} is ${total}.`);