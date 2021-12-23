// let rlSync = require('readline-sync');

// console.log('Enter the length of the room in meters:');
// let length = rlSync.prompt();

// console.log('Enter the width of the room in meters:');
// let width = rlSync.prompt();

// let area = Number(length) * Number(width);

// console.log(`The area of the room is ${area} square meters (${area * 10.7639} square feet).`);

// book solution

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);

// do FE at some point