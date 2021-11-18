// let arr = [1, 2, 3];

// let newArr = arr.filter(function(element) {
//   return element > 1;
// });

// console.log(newArr);

function arrayEquals(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] != arr2[i]) return false;
  }
  
  return true;
}

let arr1 = [1, 2, 3];
let arr2 = arr1;

console.log(arrayEquals(arr1, arr2));
console.log(arrayEquals([1, 2, 3], [1, 2, 3]));