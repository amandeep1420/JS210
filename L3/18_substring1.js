/*

P
  - write a function that returns a substring of a string based on a starting
    index and length - "substr(string, start, length)"
  - input: string
  - output: a new string
  ~
  - note: you can use [] and length - nothing else from String
  - note: if start is negative, treat it as (strLength - the number)
E
  - see book
D
  - n/a
A
  > general idea: loop and create a new string, yada yada
  
  > establish starting index
    - fix if start is negative
  
  > build the new string
    - declare/initialize var to empty string
    - for (let index = start; index < string.length; index += 1)
      - newString += string[index]
  
  > return new string
  
*/

const substr = function(string, start, length) {
  if (start < 0) start += string.length;
  
  console.log(start);
  let newString = '';
  
  for (let index = start; index < string.length; index +=1) {
    if (newString.length >= length) break;
    newString += string[index];
  }
  
  return newString;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""