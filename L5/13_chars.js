function repeatedCharacters(string) {
  let charsArray = string.toLowerCase().split('');
  let charCountObj = {};
  
  for (let index = 0; index < charsArray.length; index += 1) {
    let char = charsArray[index];
    charCountObj[char] ? charCountObj[char] += 1 : charCountObj[char] = 1;
  }
  
  for (let char in charCountObj) {
    if (charCountObj[char] === 1) delete charCountObj[char];
  }
  
  return charCountObj;
}

// I originally created a second object, then added key-value pairs to that object
// only if the value was greater than one; I then saw the delete keyword implementation
// and added it. It is really useful!