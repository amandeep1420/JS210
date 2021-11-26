/*
P
  - write a function that takes a string, starting index, and ending index, 
    and returns the resultant substring
  - input: string, start index, end index
  - output: string
  ~
  note: if both start and end are positive integers, start is less than end
        and both are within the boundary of the string, return the substring 
        from the start index (inclusive) to the end index (NOT inclusive)
  note: if the value of start is greater than end, swap them
  note: if start is equal to end, return an empty string
  note: if end is omitted, it becomes undefined within the function; return 
        the entire substring starting at the start index
  note: if either start or end is less than 0 or NaN, treat it as zero
  note: if either start or end is greater than the length of the string, treat it
        as equal to the string length
E
  - see book
D
  - n/a
A
  > general idea: we're building a new string, but need to perform a lot of checks;
    implement the bones, then build on top
    
  > cover the checks
    - if end > start
      - declare temp variable
      - swap the values
    -
    
  > create the substring
    - declare newString and initialize to empty string
    - for (let index = start; index < end; index += 1)
      - newString += character at current index
  
  > return newString







*/


function substring(string, start, end) {
  if (end === undefined) end = string.length;
  
  start = checkValidNumber(start);
  end   = checkValidNumber(end);
  
  if (start > end) {
    let temp;
    temp  = start;
    start = end;
    end   = temp;
  }
  
  let newString = '';
  
  for (let index = start; index < end; index += 1) {
    if (index === string.length) break;
    newString += string[index];
  }
  
  return newString;
}

function checkValidNumber(num) {
  return (Infinity / num !== Infinity || num < 0) ? 0 : num;
}

let string = 'hello world';

substring(string, 2, 4);    // "ll" - done
substring(string, 4, 2);    // "ll" - done
substring(string, 0, -1);   // "" 
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"