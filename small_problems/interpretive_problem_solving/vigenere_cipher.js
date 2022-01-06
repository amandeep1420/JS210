/*
At a job interview, you are challenged to write an algorithm to check if a given string, s, 
can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest 
from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

function format: isMerge(string, part1, part2);


// function isMerge() {
//   return true;
// }

// isMerge('codewars', 'code', 'wars');   // returns true
// isMerge('codewars', 'cdw', 'oears');   // returns true
// isMerge('CoDeWARS', 'CoDe', 'wars');   // returns true
// isMerge('codewars', 'codewars', 123);  // returns true
// isMerge('codewars', [], 'codewars');   // returns true
// isMerge('codewars', 'wdc', 'sraeo');   // returns false
// isMerge('codewars', 'cod', 'wars');    // returns false
// isMerge('codewars', 'codewars', null); // returns false
// isMerge('codewars', 'codewars');        // returns false


// Awarding Prizes
// You are given a dictionary of names and the amount of points they have. Return a dictionary with the same names, but instead of points, return what prize they get.

// "Gold", "Silver", or "Bronze" to the 1st, 2nd and 3rd place respectively. For all the other names, return "Participation" for the prize.

// Notes
// There will always be at least three participants to recieve awards.
// No number of points will be the same amongst participants.

/*
Problem
> write a function that takes an object with names as properties and point values as
  values, and returns a transformed version of that object with each property value
  assigned to the 'correct' string based on the criteria in the prompt.

> input: an object with at least three properties
  - no two properties will have the same value (do not need to worry about sorting in the
    event that two properties have the same value)
  - do not mutate input
  - questions:
    - do I need to handle properties with non-Number values?
      - no; property values will always be integers
    - do I need to handle non-object inputs:
      - no; input will always be an object
    - do I need to handle special numbers?
      - no; values will always be regular integers
    - **return to reevaluate at a later date**

> output: a transformed version of the input object (new object)
  - the 'first three values' will be transformed to 'Gold', 'Silver', and 'Bronze',
    based on the numeric value in descending order
  - everything else will be transformed to 'Participation'
  - maintain properties from input to output; do not remove or change property names

Example
// Examples
// awardPrizes({
//   "Joshua" : 45,
//   "Alex" : 39,
//   "Eric" : 43
// }) ➞ {
//   "Joshua" : "Gold",
//   "Alex" : "Bronze",
//   "Eric" : "Silver"
// }

// awardPrizes({
//   "Person A" : 1,
//   "Person B" : 2,
//   "Person C" : 3,
//   "Person D" : 4,
//   "Person E" : 102
// }) ➞ {
//   "Person A" : "Participation",
//   "Person B" : "Participation",
//   "Person C" : "Bronze",
//   "Person D" : "Silver",
//   "Person E" : "Gold"
// }

// awardPrizes({
//   "Mario" : 99,
//   "Luigi" : 100,
//   "Yoshi" : 299,
//   "Toad" : 2
// }) ➞ {
//   "Mario" : "Bronze",
//   "Luigi" : "Silver",
//   "Yoshi" : "Gold",
//   "Toad" : "Participation"
// }

Data structure
> dealing with an object for the input
> use an array for the top three string 'awards'

Algorithm:
> declare and intialize the object to be returned

> evaluate the value of each property, sorting them from highest to lowest
  - get an array of all the values in the ibput object
    - possible method: Object.values
  - sort the values from highest to lowest
    - possible implementation, below:
      - values.sort((a, b) => b - a);

> build the new object
  - declare and initialize array to ['Gold', 'Silver', 'Bronze']
  - iterate over the values from sortedValues
    - for each value:
      - let propertyName;
      - find the property name from the original object by iterating through
        the property names (set in an array) and selecting the one that has a matching
        value to the value being iterated over
      - shift the first value from awards and assign a local variable, newValue, to it
        - if the shifted value is undefined, reassign newValue to 'Participation'
      - create a new property in the new object to be returned using the located
        property name and the transformed value

> return the built object

*/

// function awardPrizes(obj) {
//   let newObj = {};
  
//   let values = Object.values(obj);
  
//   let sortedValues = values.sort((a, b) => b - a);
  
//   let awards = ['Gold', 'Silver', 'Bronze'];
  
//   sortedValues.forEach(value => {
//     let propertyName;
//     Object.keys(obj).forEach(name => {
//       if (value === obj[name]) {
//         propertyName = name;
//       }
//     });
    
//     let newValue = awards.shift();
    
//     if (newValue === undefined) newValue = 'Participation';
    
//     newObj[propertyName] = newValue;
//   });
  
//   return newObj;
// }
let result = awardPrizes({
  "Joshua" : 45,
  "Alex" : 39,
  "Eric" : 43
}) 
console.log(result)
// {
//   "Joshua" : "Gold",
//   "Alex" : "Bronze",
//   "Eric" : "Silver"
// }

result = awardPrizes({
  "Person A" : 1,
  "Person B" : 2,
  "Person C" : 3,
  "Person D" : 4,
  "Person E" : 102
})
console.log(result);
//   "Person A" : "Participation",
//   "Person B" : "Participation",
//   "Person C" : "Bronze",
//   "Person D" : "Silver",
//   "Person E" : "Gold"
// }

result = awardPrizes({
  "Mario" : 99,
  "Luigi" : 100,
  "Yoshi" : 299,
  "Toad" : 2
})

console.log(result)
//   "Mario" : "Bronze",
//   "Luigi" : "Silver",
//   "Yoshi" : "Gold",
//   "Toad" : "Participation"
// }


function awardPrizes(obj) {
  let sortedValues = Object.values(obj).sort((a, b) => b - a);
  
  let newObj = {};
  
  let awards = ['Gold', 'Silver', 'Bronze'];

  Object.keys(obj).forEach(name => {
    let index    = sortedValues.indexOf(obj[name]);
    let newValue = awards[index];
    
    if (newValue === undefined) newValue = 'Participation';
    
    newObj[name] = newValue;
  });
  
  return newObj;
}