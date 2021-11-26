/*
P
  - write two functions that each take two strings as arguments. expected behaviors:
    - "indexOf(firstString, secondString)": searches for the first instance of a 
       substring in firstString that matches the string secondString, and returns 
       the index of the character where that substring begins
    - "lastIndexOf(firstString, secondString)": searches for the last instance of a
       substring in firstString that matches the string secondString, and returns
       the index of the character where that substring begins
  - both functions return -1 if firstString does not contain the substring specified
    by secondString
  
  - inputs: a string to be checked (firstString) and a string to check for (secondString)
  - outputs: either the relevant index or -1
  ~
  - note: strings are primitive in JS; cannot mutate
  - note: case sensitive
  - note: ***only allowed to use square brackets and the length property; cannot
          use any other properties or methods from String class
E
  - see book
D
  - tbd...
A
  > note: could convert to an array and work with that...
  > note: hm...
  > note: perhaps we could...
  
  indexOf:
  > general idea: create a loop checking a substring from each index
  
  > convert string to array
    - split string and initialize variable to return value
  > create a length to slice by
    - get the length of secondString and subtract 1 to account for zero-based index
      - initialize variable to this
  > initialize a variable to 0 to act as counter for index
  
  > create a while loop to check each substring (more readable)
    - let substring = letters.slice(index, sliceEnd).join('')
    - ...completed rest of function...
    
  lastIndexOf:
  > general idea: use indexOf to find valid indexes until no more can be found; 
    return the greatest index, or -1
    
  > create a storage array for the valid index found during each iteration
  > create a do loop while the storage array does not include -1
    - call indexof(firstString, secondString)
      - initialize variable to return value
        - if return value is NOT -1
          - push index to storage array
          - firstString = firstString - the found substring
        - if return value IS -1
          - loop ends
  >
*/

  
function indexOf(firstString, secondString) {
  let firstStringLetters = firstString.split('');
  let index              = 0;
  let sliceEnd           = secondString.length;
  
  while (sliceEnd <= firstStringLetters.length) {
    let substring = firstStringLetters.slice(index, sliceEnd).join('');
    if (substring === secondString) return index;
    
    index    += 1;
    sliceEnd += 1;
  }
  
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let indexStorage       = [];
  
  do {
    let foundIndex = indexOf(firstString, secondString);
    if (foundIndex === -1) break;
    indexStorage.push(foundIndex);
    
    let firstStringLetters = firstString.split('');
    firstStringLetters.splice(0, foundIndex + 1);
    
    firstString = firstStringLetters.join('');
  } while (!indexStorage.includes(-1));
  return indexStorage.length === 0 ? -1 : (indexStorage.reduce((n1, n2) => n1 + n2)) + 1;
}

let result = lastIndexOf('Blue Whale, Killer Whale', 'all');
console.log(result);
  
// getting lastIndexOf to reuse indexOf was mind-shatteringly difficult for some reason
  
// there are indexOf and lastIndexOf String methods available in JS
// for future reference
// they also take an optional argument that specifies a starting index
// neat
  
  
  