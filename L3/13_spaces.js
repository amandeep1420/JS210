// /*
// P
//   - write a function that takes a string as an argument, and returns the string
//     stripped of spaces from both ends; do not remove or alter internal spaces
//   - input: a string
//   - output: a stripped string
//   ~
//   - note: you may use square brackets and the length property to find string
//           length; you may not use any other properties or methods for String
// E
//   - see book
// D
//   - array
// A
//   > declare variable and initialize to array of letters from string
  
//   > strip leading spaces
//     - for (; letters[0] !== ' '; ;)
//       - remove first letter
  
//   > strip trailing spaces
//     - for (; letters[letters.length - 1] !== ' '; )
//       - remove last letter
      
//   > join array
// */

// let trim = (string) => {
//   let letters = string.split('');
  
//   for (; letters[0] === ' '; ) {
//     letters.shift();
//   }
  
//   console.log(letters);
  
//   for (; letters[letters.length - 1] === ' '; ) {
//     letters.pop();
//   }
  
//   console.log(letters);
  
//   return letters.join('');
// }

function trim(string) {
  let trimmed = trimLeft(string);
  trimmed = trimRight(trimmed);

  return trimmed;
}

function trimLeft(string) {
  let newString = '';
  let copyMode = false;

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString += string[index];
    }
  }

  return newString;
}

function trimRight(string) {
  let newString = '';
  let copyMode = false;

  for (let index = string.length - 1; index >= 0; index -= 1) {
    if (string[index] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString = string[index] + newString;
    }
  }

  return newString;
}

let result = trim(' a b  c');

console.log(result);

// reaaaaaaally need to remember how the break condition works for "for" loops
// the loop runs so long as the condition is true!!