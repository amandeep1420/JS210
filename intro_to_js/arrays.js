// let myArray = [1, 3, 6, 11, 4, 2,
//               4, 9, 17, 16, 0];
               
// myArray.forEach(num => (num % 2 === 0) ? console.log(num) : null);

// myArray.forEach(function(num) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

// for (let index = 0; index < myArray.length; index += 1) {
//   let value = myArray[index];
//   if (value % 2 === 0) {
//     console.log(value);
//   }
// }

// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];


// myArray.forEach(function(subarray) {
//   subarray.forEach(function(num) {
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//   });
// });

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let newArray = myArray.map(num => num % 2 === 0 ? 'even' : 'odd');

// console.log(newArray);

// let newArray2 = myArray.map(function(num) {
//   if (num % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// });

// console.log(newArray2);

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 
 
// function findIntegers(array) {
//   return array.filter(num => Number.isInteger(num));
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function oddLengths(array) {
//   let lengthsArr = array.map(string => string.length);
//   return lengthsArr.filter(num => num % 2 !== 0);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// let meow = arr.reduce((array2, element) => {
//   let length = element.length;
//   if (length % 2 !== 0) {
//     array2.push(length);
//   }
//   return array2;
// }, []);
  
// console.log(meow);

arr[1][3] = 606;


let aman = {
  height: 5.1,
  weight: 175,
  age: 27,
  eyes: 'brown',
  info: false,
  you: 'fooled!',
};

let amanJunior = Object.create(aman);

amanJunior['eyes'] = 'blue';

amanJunior['width'] = 'wut';