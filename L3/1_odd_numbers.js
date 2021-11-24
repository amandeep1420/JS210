/*
P
  - write a function that takes a positive integer as an argument, and logs all the odd
    numbers from 1 to the passed-in number (inclusive). All numbers should be logged on
    separate lines.
  - input: number
  - output: specified logging to console.
E
  - logOddNumbers(19);
  
  // output
  1
  3
  5
  7
  .
  .
  19
  
D
  - N/A
A
  > Create a loop that starts from 1 and adds 2 to the current number to be logged;
    break the loop once the number is larger than the argument
    - ex. code
      function logOddNumbers(limit) {
        for (let i = 1; i <= limit; i += 2) {
          console.log(i);
        }
      }
  > scrap: this doesn't work if the argument is an even number; retained a solution
           from an earlier problem without ~thinking about it~ (it's late)
  > Create a loop to log each number
    - for loop:
      - current number = 1; current number <= argument; current number += 1
        if (current number % 2 !== 0) console.log(current number);
        
  > THAT CODE DID WORK, ADJSOIDHJASOIFH:ASFH time for bed
C
// */

// function logOddNumbers(limit) {
//   for (let i = 1; i <= limit; i += 1) {
//     if (i % 2 !== 0) console.log(i);
//   }
// }

logOddNumbers(19);
logOddNumbers(8);

// further exploration

// #1.
// my solution

// #2

function logOddNumbers(number) {
  for (let i = 1; i <= number; i += 1) {
    if (i % 2 === 0) continue;
    console.log(i);
  }
}