/*
Problem
> write a function that computes the difference between the square of the sum
  of the first N positive integers and the sum of the squares of the first N
  positive integers
  
> input: a positive integer
  - that may be odd or even

> output: the difference between the the sum of the first N positive integers, squared
          and the sum of the the squares of the first N positive integers
  - two sums: 
    - the sum of the first N positive integers
    - the sum of the squares of the first N positive integers
    
> questions/notes:
  - do I need to validate input?
    - what is valid input?
  - what is a positive integer in this context?
    - based on the examples, N will start at 1
  - will the function ever be called without arguments?

Examples
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
sumSquareDifference(1000);   // what is the result?

Data Structure
> create an array of integers to work with; N should be the last integer
  - this array will contain every number from 1 to N as an individual element
  
Algorithm
> build the array of integers
  - declare and intialize a variable to a storage array, 'integers'
  - declare and initialize a variable to 1 to track the current integer, 'currentNum'
  - while currentNum <= N
    - push currentNum to integers
    - increment currentNum by 1
    
> find the sums to work with
  - sum up the integers array, square it, and save it to a variable
    - possible implementation: reduce
  - square each element in the integers array, sum them up, and save them to a variable
    - possible implementation: map + reduce

> return the difference
*/

function sumSquareDifference(n) {
  let integers   = [];
  let currentNum = 1;
  
  while (currentNum <= n) {
    integers.push(currentNum);
    currentNum += 1;
  }
  
  let squareSum  = integers.reduce((a, b) => a + b) ** 2;
  let sumSquares = integers.map(int => int**2).reduce((a, b) => a + b);
  
  return squareSum - sumSquares;
}

let result = sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

console.log(result);

result = sumSquareDifference(10);     // 2640

console.log(result);

result = sumSquareDifference(1);      // 0

console.log(result);
result = sumSquareDifference(100);    // 25164150

console.log(result);
result = sumSquareDifference(1000);   // what is the result?

console.log(result);