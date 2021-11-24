/*
P
  - write a function that logs the integers from 1 to 100 (inclusive) that are 
    multiples of either 3 or 5. If the number is divisble by both 3 AND 5, append
    an "!" to the number
  - input: N/A
  - output: all numbers from 1 to 100 per specified rules
  ~
  note: ...
E
  - see book
D
  - N/A
A
  > loop through 1-100 and log the correct output
    - create a conditional:
      - if number is a multiple of 3 AND 5 -----> create helper function to check this
        - log number with ! appended
      - else if number is multiple of 3 OR multiple of 5
        - log number
C
*/

function threeAndFive (number) {
  return (number % 3 === 0) && (number % 5 === 0);
}

function multiplesOfThreeAndFive() {
  for (let currentNumber = 1; currentNumber <= 100; currentNumber += 1) {
    if (threeAndFive(currentNumber)) {
      console.log(`${currentNumber}!`);
    } else if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
      console.log(currentNumber);
    }
  }
}

multiplesOfThreeAndFive();


// further exploration:
// declare function with two parameters; declare currentNumber in for loop and 
// initialize to first argument (presumably the lower bound of the range);
// modify break condition to use second argument (presumably the upper bound of the range)