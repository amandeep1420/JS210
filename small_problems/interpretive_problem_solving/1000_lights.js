"use strict";

/*

P
  - write a program that takes one argument, "n", which represents the total
    number of switches in a bank, and returns an array of the lights that are 
    on after "n" repetitions
    
  - input:
    - "n" -> assuming this is a positive integer
    - questions:
      - do I need to guard against invalid input?
        - if so, what constitutes invalid input?
  - output
    - array of lights that are on
      - the lights should be represented by their index + 1; in other words,
        their natural order
        
E
  - lightsOn(5);        // [1, 4]
  - lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

A
  > create the light "bank"
    - given the number of switches as input, "n"
      - declare and intialize a variable, "bank", to an empty array
      - push the boolean true to "bank" "n" number of times
        - possible code: simple for loop
          - initialize start to 1
            - for each repetition, push true to bank and increment start by 1
            - break loop once start is greater than n
            
  > iterate through the bank, turning lights on and off, for "n" number of iterations
    - we're toggling based on a given factor, which is incremented after each iteration
      until the factor is greater than "n"
    - start factor at 2 (initial pass already completed)
    - for each iteration
      - for each element
        - if the element index + 1 % factor === 0
          - toggle the element
        - increment the factor by 1
  
  > obtain the light numbers for those lights which are on
    - declare and initialize an variable, "lightsOn", to an empty array
    - for each element in "bank"
      - if the value of the element is true
        - push the index + 1 to lightsOn
    - return lightsOn

*/

console.log(lightsOn(5));
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


function lightsOn(n) {
  let bank = Array(n).fill(true); // copied from another student; very handy
  
  for (let factor = 2; factor <= n; factor += 1) {
    bank.forEach((light, index) => {
      if ((index + 1) % factor === 0) {
        bank[index] = !bank[index];
      }
    });
  }
  
  return bank.reduce((lightsOn, value, index) => (
    value ? lightsOn.concat(index + 1) : lightsOn
    ), []);
}

// solution created while talking through everything