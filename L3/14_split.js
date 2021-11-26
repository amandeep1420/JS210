/*
P
  - write a function that takes two arguments - a string to be split, and a 
    delimiter character. the function logs the split strings to the console.
  - input: a string and delimiter
  - output: specified console logging
  ~
  - note: make a special case for '' as the delimiter?
E
  - see book
D
  - array...is it bad that I keep using arrays? I'm not seeing them in any of the
    given solutions...need to ask in slack
A
  > general idea: build an array of strings using the delimiter, then iterate
    through them, logging them to the console. build each string individually,
    pushing them to the storage array whenever the delimiter is encountered.
  
  > GUARD CLAUSE: if delimiter === undefined, log 'ERROR: No delimiter' and exit
  
  > create the storage array
    - declare and initialize variable to empty array
  
  > loop through each character in the string, building and pushing individual 
    strings to storage
    - have empty start string as current string
    - for (let index = 0; index < string.length; index += 1)
      - let current character = string[index]
      - if current character === delimiter
        - push current string to storage array
        - reset the current string
        - go to next iteration
      - reassign current string to result of concatenating current string with
        current character


*/

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }
  
  let currentString    = '';
  
  for (let index = 0; index < string.length; index +=1) {
    if (string[index] === delimiter) {
      console.log(currentString);
      currentString = '';
    } else if (delimiter === '') {
      console.log(string[index]);
    } else {
      currentString += string[index];
    }
  }
  
  if (currentString) console.log(currentString);
}

let result = splitString('abc,123,hello world', ',');

console.log(result);

// their solution is much more elegant than ours, which used an array and 
// much more verbose conditionals

// we haven't reached the arrays lesson yet, hence the lack of their use in 
// the solutions; I will adjust accordingly