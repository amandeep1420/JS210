let rlSync = require('readline-sync');

let whichNum = ['1st', '2nd', '3rd', '4th', '5th'];

let fiveNumsFromUser = [];

for (let i = 0; i < whichNum.length; i += 1) {
  fiveNumsFromUser[i] = rlSync.question(`Enter the ${whichNum[i]} number: `);
}

let lastNum = rlSync.question('Enter the last number: ');

if (fiveNumsFromUser.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in [${fiveNumsFromUser.join(', ')}].`);
} else {
  console.log(`The number ${lastNum} does not appear in ${fiveNumsFromUser}.`);
}

// not very efficient

// need to start using one-line arrow functions more so i can implement them as callbacks
// ex. const even = num => num % 2 === 0;
// Array.prototype.some() === Array#any?