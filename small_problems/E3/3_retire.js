let rlSync = require('readline-sync');

let currentAge = parseInt(rlSync.question('What is your age? '), 10);
let retirementAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);
let difference = retirementAge - currentAge;
let thisYear = new Date().getFullYear();

console.log(`It's ${thisYear}. You will retire in ${thisYear + difference}.`);
console.log(`You only have ${difference} years of work to go!`);


// just using Date() returns a string representation of the current date and time
// using new Date() returns an object/an instance of the Date class?
