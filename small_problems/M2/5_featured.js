/*
Problem
  > write a function that takes an integer as an arg and returns the next 'featured'
    number greater than the integer; issue an error message if there is no next
    featured number
  
  > input: an integer
    - that will always be positive
  
  > output: the next featured number that is greater than the input
    - a featured number is:
      - odd
      - multiple of 7
      - has unique digits
    - log the string "There is no possible number that fulfills those requirements."
      if the process that looks for the next featured number passes 9876543210

Examples
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

Data structure
  > not sure we need one yet...
  
Algorithm
    - declare and intialize constant MAX to max featured number value
    - declare and intialize constant ERROR to specified error message
      
  > find the starting point
    - let start = integer + 1; (avoids additional mental overhead to account for accidentally returning input)
    - while the integer % 7 === 0
      - integer += 1

  > find the next featured number
    - if the start is odd and has unique digits, return it
    - else, increment by 7
      - possible implementations: a for loop and a helper function
        - for (let current = start; ; current += 7)
          - if current % 2 !== 0 && hasUniqueDigits(current) return current;
          - if current > MAX
            - break
    - log ERROR
          
        - helper function: hasUniqueDigits(integer) 
          - let integerString = String(integer)
          - let digits = integerString.split('');
          - return digits.every(digit => digits.indexOf(digit) === digits.lastIndexOf(digit));


*/

function featured(integer) {
  const MAX = 9876543210;
  const ERROR = "There is no possible number that fulfills those requirements.";
  
  let start = integer + 1;
  while (start % 7 !== 0) {
    start += 1;
  }
  
  for (let current = start; ; current += 7) {
    if (current % 2 !== 0 && hasUniqueDigits(current)) return current;
    if (current > MAX) break;
  }
  
  console.log(ERROR);
}


function hasUniqueDigits(integer) {
  let integerString = String(integer);
  let digits = integerString.split('');
  return digits.every(digit => digits.indexOf(digit) === digits.lastIndexOf(digit));
}

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999) === 1023547);       // 1023547
// console.log(featured(999999987) === 1023456987);    // 1023456987
console.log(featured(9876543186) === 9876543201);   // 9876543201
console.log(featured(9876543200) === 9876543201);   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."