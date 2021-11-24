/*
P
  - Write a function that takes a number argument and returns true if the number
    is prime, false if not. You do not need to validate input - will always be a
    positive integer.
  - input: positive integer
  - output: boolean
E
  - see book
D
  - n/a
A
  > return false if the input is less than 2
  > check every number from input to 1 (exclusive on both ends) 
    - return false if a the input divided by a given number has no remainder
  > return true

*/


let isPrime = (number) => {
  if (number < 2) return false;
  
  for (let divisor = number - 1; divisor > 2; divisor -= 1) {
    if (number % divisor === 0) return false;
  }
  
  return true;
}