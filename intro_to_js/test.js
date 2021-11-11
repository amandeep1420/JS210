/* let cat = true;

if (cat === true) {
  console.log('does this work?');
} else {
  console.log('I have no idea what I\'m doing!');
}

let names = [ 'Asta', 'Butterscotch', 'Pudding', 'Neptune', 'Darwin' ];

let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
}; */

let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);