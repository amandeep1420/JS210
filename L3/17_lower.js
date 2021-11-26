/*
P
  - write a function that returns a string converted to lowercase
  - input: a string
  - output: lowercase string
  ~
  - note: may use charCodeAt, fromCharCode, [], and length - nothing else
E
  - see book
D
  - n/a
A
  > general idea: build a new string and return it. check each character code 
    after adding 32 - if it's higher than 123, use the original character.
    
  > declare newString and initialize to empty string
  
  > create a loop
    - for (index = 0; index < string.length; index += 1)
      - if the character code + 32 is not higher than 123
        - concatenate newString with the character found after adding 32 to 
          code
      - else
        - concatenate newString with original character
  
  > return newString


*/

const toLowerCase = (string) => {
  let newString = '';
  const LAST_ALPHA_CODE = 122;
  
  for (let index = 0; index < string.length; index +=1) {
    let charCode    = string.charCodeAt(index);
    let newChar     = String.fromCharCode(charCode + 32)
    
    newString += /[a-z]/.test(newChar) ? newChar : string[index]
  }
  
  return newString;
};

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"