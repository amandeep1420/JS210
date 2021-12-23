for (let num = 1; num < 100; num +=1) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

for (let num = 1; num < 100; num += 2) {
  console.log(num);
}

let num = 1;

while (num < 100) {
  if (num % 2 !== 0) console.log(num);
  num += 1;
}

let rlSync = require('readline-sync');

for (let num = 1; num < (Number(rlSync.question('Please enter a limit: '))); num += 1) {
  console.log(num);
}