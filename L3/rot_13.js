/*
P
  - Create a rot13 letter-substitution cipher function that translates a string
    into a new string.
    - For each character in the original string:
      - if the character is a letter in the modern english alphabet, change it to
        a character 13 positions later in the alphabet
      - letter transformations preserve case
      - don't modify characters that aren't letters
  ~
  - note: able to use any function we'd like
  - note: executing the function twice using a given string should return the 
          same string
E
  - see book
D
  - n/a
A
  > general idea: loop through the string, evaluating character by character, 
    to build a new string
  
  > declare and initialize variable, newString, to empty string
  
  > create the loop
    - for (let index = 0; index < string.length; index +=1) // iterate through characters
      - let currentCharacter = string[index]
      
      - if currentCharacter is not in alphabet **possible method: regex + test
        - reassign newString to result of concatenating with currentCharacter
        - continue to next iteration
      
      - check character case via conditional and regex (like above)
        - create a helper function that takes two arguments, the character and a
          keyword representing case, and returns the appropriate character
      
      - reassign newString to return value of concatenating newString with new character
  
  > return the new string
  
  ~
  
  > helper functions:
    - "findRot13Character(character, case)"
      - const HIGHEST_UPPERCASE_CHAR_CODE = 65     // going to use charCodeAt/fromCharCode
      - const HIGHEST_LOWERCASE_CHAR_CODE = 141
      - const ROT_13_OFFSET = 13
      - const ASCII_CODE_OFFSET = 26
      
      - let newCharCode = character.charCodeAt(0) + ROT_13_OFFSET;
      - if case === 'upper'
        - if the new character code > HIGHEST_UPPERCASE_CHAR_CODE
          - newCharCode -= 26
      
      - repeat branch for else clause
      
      - return String.fromCharCode(newCharCode)
  
    
    
    
*/

let rot13 = (string) => {
  let newString = '';
  
  for (let index = 0; index < string.length; index += 1) {
    let currentCharacter = string[index];
    
    if (!/[A-Z]/i.test(currentCharacter)) { // handle non-alpha characters
      newString += currentCharacter;
      continue;
    }
    
    let charCase = /[A-Z]/.test(currentCharacter) ? 'upper' : 'lower'; // check case
    
    currentCharacter = findRot13Character(currentCharacter, charCase); // apply cipher
    
    newString += currentCharacter; // build string
  }
  
  return newString;
};

function findRot13Character(letter, letterCase) {
  const HIGHEST_UPPERCASE_CHAR_CODE = 90; // should've used String.fromCharCode('Z')
  const HIGHEST_LOWERCASE_CHAR_CODE = 122; // same deal as above
  const ROT_13_OFFSET               = 13;
  const ASCII_OFFSET                = 26;
  
  let newCharCode = letter.charCodeAt(0) + ROT_13_OFFSET;
  
  if (letterCase == 'upper') {
    if (newCharCode > HIGHEST_UPPERCASE_CHAR_CODE) newCharCode -= ASCII_OFFSET;
  } else {
    if (newCharCode > HIGHEST_LOWERCASE_CHAR_CODE) newCharCode -= ASCII_OFFSET;
  }
  
  return String.fromCharCode(newCharCode);
}
