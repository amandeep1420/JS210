/*
P
  - write a function that takes the lengths of the three sides of a triangle as arguments
    and returns one of the four specified strings representing the triangle's classification
    
  - input: three numbers
    - may or may not be integers
    - questions:
      - do I need to account for invalid numbers?
        - this is a yes based on the problem requirements
      - do I need to acccount for invalid input?

  - output: one of the strings below
    - invalid (also serves as a guard clause):
      - the sum of two shortest sides is not longer than the longest side
      - any side is less than or equal to 0
  
    - equilateral: all three sides are of equal length
    - isosceles: two sides are of equal length
    - scalene: no sides are of equal length
    
E
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

D
  - an array to store side values
  
A
  > sort the sides from smallest to largest
  
  > check to see if the triangle is invalid
    - if elements at index 0 and index 1, summed up, are not larger than index 2
      - or
    - if any element is less than or equal to 0
      - return 'invalid'
      
  > figure out the classification
    - if all sides are equivalent to the first side
      - return 'equilateral'
    - else if the first two sides in the array are equivalent or the second two sides are equivalent
      - return 'isosceles'
    else
      - return 'scalene'

*/

function triangle(...sides) {
  sides.sort((a, b) => a - b);
  
  if (sides[0] + sides[1] < sides[2]) return 'invalid';
  if (sides.some(side => side <= 0)) return 'invalid';
  
  if (sides.every(side => side === sides[0])) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}