/*

P
  - write a function that implements the caesar cipher, which substitutes an 
    alpha char for the one located n spots to the right; if the n substitution/shift
    goes past the end of the alphabet, wrap around as many times as needed
  
  - input: a string
    - must leave non-alpha chars unaffected
    - must maintain case during transformation
    - must wrap around alphabet as needed to obtain new char
    - questions:
      - do I need to validate input?
      - do I need to address any edge cases?
      - ~
    
  - output: a string
    - not much to say here
    
E
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

D
  - store the alpha characters in an array
  - store the characters from the input string in an array (possibly)
  
A
  > create an alphabet key
    - use the alphabet string from the example
    
  > create a constant representing the last index in the alpha key
    
  > build a new string, character-by-character
    - create a storage array for the new characters, 'newChars'
    - for each character in the input string, transform as needed and push to storage
      - possible implementation: forEach
      - for each character and index:
        - upcase character and store in new variable
        - if char is included in alpha key
          - pass character to transformation function
          
            - function transformChar(char, index) 
              
            
          - push to storage array
        - else
          - push to storage array
        

*/
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const end   = alpha.length - 1;

function caesarEncrypt(string, shift) {
  let newChars = [];
  
  [...string].forEach(char => {
    let upcaseChar = char.toUpperCase();
    let index = alpha.indexOf(upcaseChar);
    
    if (alpha.includes(upcaseChar)) {
      let newChar = transformChar(upcaseChar, index + shift);
      newChar = alpha.includes(char) ? newChar : newChar.toLowerCase();
      newChars.push(newChar);
    } else {
      newChars.push(char);
    }
  });
  
  return newChars.join('');
  
}

function transformChar(char, index) {
  while (index > end) {
    index -= end + 1;
  }
  return alpha[index];
}

let a = caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

console.log(a)