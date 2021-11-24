let rlSync = require('readline-sync');

let score1 = parseInt(rlSync.question('Enter score 1: '), 10);
let score2 = parseInt(rlSync.question('Enter score 2: '), 10);
let score3 = parseInt(rlSync.question('Enter score 3: '), 10);

let average = (score1 + score2 + score3) / 3;

let letterGrade = 'F';

if (average >= 90) {
  letterGrade = 'A';
} else if (average >= 70) {
  letterGrade = 'B';
} else if (average >= 50) {
  letterGrade = 'C';
} 

console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade}".`);

// further exploration: later