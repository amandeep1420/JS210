function crunch(string) {
  let newString = '';
  
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index + 1]) newString += string[index];
  }
  
  return newString;
}