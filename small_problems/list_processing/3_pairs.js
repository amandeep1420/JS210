function multiplyAllPairs(arr1, arr2) {
  let products = [];
  
  arr1.forEach(num1 => arr2.forEach(num2 => products.push(num1 * num2)));
  
  return products.sort((a, b) => a - b); // need to learn this convention; b - a reverses it
}                                        // just like a > b or b > a with sort in ruby

// function compareNums(n1, n2) {
//   if (n1 < n2) {
//     return -1;
//   } else if (n1 > n2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]