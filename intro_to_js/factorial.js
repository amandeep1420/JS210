// function factorial(number) {
//   let result = 1;
//   for (let counter = number; counter > 0; counter -= 1) {
//     result *= counter;
//   }

//   return result;
// }

// // turns into

// function factorial(number) {
//   if (number === 1) {
//     return 1;
//   }

//   return number * factorial(number - 1);
// }

let arr = [1, 2, 3];

arr[12] = 'cat';

console.log(arr);

console.log(arr[6]);

arr.reduce((sum, num) => {
  sum + num
}, 0)