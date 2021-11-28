let rlSync = require('readline-sync');

let noun      = rlSync.question('Enter a noun: ');
let verb      = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter an adjective: ');
let adverb    = rlSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? Yikes on bikes!`);

// try doing this again but extract the logic so you don't need to repeat yourself