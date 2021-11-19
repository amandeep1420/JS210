let rlSync = require('readline-sync');

let phrase = rlSync.question('Please enter a phrase: ');

let spacelessString = phrase.replace(/[^a-z]/i, '');

console.log(`There are ${spacelessString.length} characters in "${phrase}".`);
console.log(spacelessString);