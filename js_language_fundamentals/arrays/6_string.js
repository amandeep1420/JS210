function reverse(input) {
  let newObj = (Array.isArray(input)) ? [] : '';
  
  for (let i = input.length - 1; i >= 0; i -= 1) {
    Array.isArray(newObj) ? newObj.push(input[i]) : newObj += input[i];
  }
  
  return newObj;
}