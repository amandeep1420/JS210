let rlSync = require('readline-sync');

console.log('Enter the length of the room in meters:');
let length = rlSync.prompt();

console.log('Enter the width of the room in meters:');
let width = rlSync.prompt();

let area = Number(length) * Number(width);

console.log(`The area of the room is ${area} square meters (${area * 10.7639} square feet).`);