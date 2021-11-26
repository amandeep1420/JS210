/*
P
  - create a function that takes a string and a number, "times", as arguments.
    the function should return the string repeated "times" number of times.
    if "times" is not a number, return undefined. if it is a negative number, 
    return undefined. if "times" is 0, return an empty string. times will always
    be an integer if it's a number.
  - input: a string
  - output: either a string concatenated with iteself "times" number of times
    or undefined
E
  - see book
D
  - n/a
A
  > create GUARD CLAUSES for the following
    - return undefined if times is negative or not an number
    - return an empty string if times is 0
  
  > create an iterator to track how many counts of the original string are present
    in said string
    - in other words, let iterator = 1 to start with
  
  > store the original string for reference
  
  > while iterator < times
    - string += original string
    - iterator += 1
    
  > return string


*/

let myRepeat = (string, times) => {
  if (typeof times !== 'number' || times < 0) {
    return undefined;
  } else if (times === 0) {
    return '';
  }
  
  let iterator = 1;
  let original = string;
  
  while (iterator < times) {
    string += original;
    iterator += 1;
  }
  
  return string;
};

let result = myRepeat('abc', 2);

console.log(result);

// their solution is more elegant and builds the string from an empty one instead
// notice how they handle times being 0 as part of the looping logic
// instead of making a separate conditional branch for it in the guard clause
// very nice

const isCount = value => Number.isInteger(value) && value >= 0;

function repeat(string, times) {
  if (!isCount(times)) {
    return undefined;
  }

  let repeated = '';
  for (let counter = 0; counter < times; counter += 1) {
    repeated += string;
  }

  return repeated;
}