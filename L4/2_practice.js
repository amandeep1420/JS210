// 1.

// function lastInArray(array) {
//   return array[array.length - 1];
// }

// you can write the entirety of an arrow function on one line

// let lastInArray = array => array[array.length - 1]; // wonderful!

//2. 

// let rollCall = function(array) {
//   for (let index = 0; index < array.length; index += 1) {
//     console.log(array[index]);
//   }
// }

//3.

// function reverseTheArray(arr) {
//   let newArray = []
  
//   for (let index = arr.length - 1; index >= 0; index -= 1) {
//     newArray.push(arr[index]);
//   }
  
//   return newArray;
// }

//4.

let arrayAsString = (array) => {
  let elementString = '';
  
  for (let i = 0; i < array.length; i += 1) {
    elementString += String(array[i]);
  }
  
  return elementString;
};