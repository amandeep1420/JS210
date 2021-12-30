/*
Problem
  - write a function that rotates an array by moving the first element to the end
    of the array. do not modify the original array.
  
  - input: an array
    - if the input is not an array, return undefined
    - if the input is an empty array, return an empty array
    - no special case needed for array with only one element
    - questions:
      - what constitutes an empty array?
        - sparse arrays
        - arrays with no elements but with properties
        - etc.
    
  - output: a -new- array
    - do not mutate/modify the argument

Examples
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []
rotateArray();                         // undefined
rotateArray(1);                        // undefined
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

Data Structure
  - arrays
  
Algorithm
  > general idea: create a new array that contains the last element of the 
    copied array pushed to the last index
    
  > guard against non-array data types and empty arrays
    - if the input is not an array, return undefined
    - if the input is an empty array, return it
      - if the length is zero, return the input
      
  > cut off the first element and return everything from index 1 onward combined
    with the first element
      - slice from index 1 and concatentate with element at index 0
      
*/

function rotateArray(input) {
  if (!Array.isArray(input)) return undefined;
  if (input.length === 0) return input;
  
  return input.slice(1).concat(input[0]);
}