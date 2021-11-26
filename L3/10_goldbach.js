/*
P
  - write a function named "checkGoldbach" that use's Goldbach's Conjecture to log
    every pair of primes that sum to the number supplied as an argument. The function 
    takes an integer, "expectedSum", as its only parameter, and logs all combos of 
    two prime numbers whose sum is "expectedSum". Log the prime pairs with the smaller
    number first. If "expectedSum" is odd or less than 4, your function should log null.
  - input: a given number
  - output: each pair of primes that add up to the given number, with the smaller 
            number in each pair being logged first
  ~
  - note: may use a CHECK to log null and exit function if given number is odd or
          less than 4
  - note: may re-use "IsPrime" functon from previous exercise
  - note: a prime number added to itself counts as a valid pair
  - note: "upper bound" (see below for general idea) should be the given number - 2
          (as 2 is the lowest prime number in this context)
  - note: ...
E
  - see book
D
  - nested array to store pairs
A
  > general idea: create a "lower bound" and an "upper bound" of numbers to iterate
                  through, storing valid pairs, until the bounds cross. log them 
                  after iteration is complete
  > check for valid argument
    - if argument is odd or argument is less than 4
      - log null
      - return
  > declare and initialize variable to storage array
  > declare and initialize variable to upper bound
  > declare and initialize variable to lower bound
  > create the loop
    - a "while" loop is a good candidate for this
      - while lowerBound <= upperBound:
        - if either number is not prime
          - increment/decrement appropriately
          - continue to next iteration
        - push an array, [lowerBound, upperBound], to storage if the bounds add
          up to the expectedSum argument
        - upperBound -= 1
        - lowerBound += 1
  > log the pairs
    - for each pair in the array
      - log "num1 num2"


*/

let isPrime = (number) => {
  if (number < 2) return false;
  
  for (let divisor = number - 1; divisor > 2; divisor -= 1) {
    if (number % divisor === 0) return false;
  }
  
  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 !== 0 || expectedSum < 4) {
    console.log(null);
    return;
  }
  
  let upper = expectedSum - 2;
  let lower = 2;
  
  while (lower <= upper) {
    if ((isPrime(lower) && isPrime(upper)) && (lower + upper === expectedSum)) {
      console.log(`${lower} ${upper}`);
    }
    
    upper -= 1;
    lower += 1;
  }
}


// checkGoldbach(3);
// logs: null

// checkGoldbach(4);
// // logs: 2 2

// checkGoldbach(12);
// // logs: 5 7

checkGoldbach(100);

// note: can consolidate the storage and logging portions and simply log as we go
// going to implement this now 
// muuuuuuch better