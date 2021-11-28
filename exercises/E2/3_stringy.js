function stringy(number) {
  let newString = '';
  
  for (let index = 1; index <= number; index +=1) {
    newString += index % 2 !== 0 ? '1' : '0';
  }
  
  return newString;
}

