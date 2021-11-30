function cleanUp (word) {
  let newString = '';
  
  for (let index = 0; index < word.length; index += 1) {
    let currentChar = word[index];
    let fixedChar   = /[a-z]/i.test(currentChar) ? currentChar : ' ';
    
    if ((fixedChar !== ' ') || (newString[newString.length - 1] !== ' ')) {
      newString += fixedChar;
    } 
   }
  
  return newString;
}

cleanUp('!!ca!!t!!');
