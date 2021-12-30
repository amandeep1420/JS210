/*
P
  - write a function that takes a word string as an argument and returns 
    true if the word can be spelled using the set of provided "blocks", false
    otherwise
  
  - input: a string
    - that may have any case
    - questions
      - do I need to account for invalid input?
      - do I need to account for empty input?
      - do I need to account for characters not represented in the 'blocks'?
        - moving forward assuming no
  
  - output: a boolean
    - not much to say here

E
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
~ would add more as needed depending on requirements from interviewer~

D
  - an array to store the 'blocks'
  
A
  > general idea: iterate through the blocks, checking if both characters are
    present in the input string
    
  > create the 'blocks' array
    - done
    
  > downcase the input string
    - reassign variable to result of downcasing input
  
  > check to see if the input string passes
    - iterate through the blocks array, checking to see if both characters are
      present in the input string
      - potential implementation: a for loop
        - for (let index = 0; index < blocks.length; index += 1)
          - if the first character from the block and the second character from
            the block are in the string, return false
    - return true




*/

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true


function isBlockWord(string) {
  const blocks = ['bo', 'gt', 'vi', 'xk', 're', 'ly', 'dq', 'fs', 'zm', 
  'cp', 'jw', 'na', 'hu'];
  
  string = string.toLowerCase();
  
  for (let index = 0; index < blocks.length; index += 1) {
    let currentPair             = blocks[index];
    let [firstChar, secondChar] = [currentPair[0], currentPair[1]];
    if (string.includes(firstChar) && string.includes(secondChar)) return false;
  }
  
  return true;
}

function isBlockWord(str) {
  const blocks = ['bo', 'gt', 'vi', 'xk', 're', 'ly', 'dq', 'fs', 'zm', 
  'cp', 'jw', 'na', 'hu'];
  
  str = str.toLowerCase();
  
  return !blocks.some(pair => str.includes(pair[0]) && str.includes(pair[1]));
}