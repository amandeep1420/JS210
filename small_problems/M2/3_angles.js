/*
Problem
  > write a function that takes three angles of a triangle as arguments
    and returns one of the specified strings
  
  > input: will always be integers representing degrees of an angle
    - may be positive, zero, or negative
    - three integers will always be passed to function as arguments
    - questions:
      - do not need to account for invalid input (e.g. strings, decimals, etc.)?
        - correct
  
  > output: a string representing the classification of the triangle
    - invalid: 
      - the sum of all the angles is not exactly 180 degrees
      - any angle is not greater than 0
    - right: one angle is exactly 90 degrees
    - acute: all three angles are less than 90 degrees
    - obtuse: one angle is greater than 90 degrees

Examples
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

D
  > an array to store the angle values passed in as arguments

A
  > catch any invalid triangles
    - if any of the angles are less than or equal to 0, return 'invalid'
    - if the sum of all the angles is not equal to 180, return 'invalid'

  > find the classification
    - if the angles array includes 90, return 'right'
    - if all the angles in the angles array are less than 90, return 'acute'
    - return 'obtuse' (in the event that nothing has been returned so far)

*/


function triangle(...angles) {
  if (angles.some(angle => angle <= 0)) return 'invalid';
  if (angles.reduce((a, b) => a + b) !== 180) return 'invalid';
  
  if (angles.includes(90)) return 'right';
  if (angles.every(angle => angle < 90)) return 'acute';
  return 'obtuse';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"