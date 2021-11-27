/*
A
  > get the bill total
    - let readlineSync = module
    - let total = input from user parsed as float
  
  > get the tip
    - repeat the above

*/

let rlSync = require('readline-sync');

let bill          = parseFloat(rlSync.question('What is the bill? '), 10);
let tipPercentage = parseFloat(rlSync.question('What is the tip percentage? '), 10) / 100;

let tip   = parseFloat(bill * tipPercentage, 10);
let total = parseFloat(bill + tip, 10);

console.log(`The tip is $${(tip).toFixed(2)}`);
console.log(`The total is $${(total).toFixed(2)}`);