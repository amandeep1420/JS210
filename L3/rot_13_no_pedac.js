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
