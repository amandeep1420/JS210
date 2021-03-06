// let interleave = (arr1, arr2) => {
//   let newArr = [];
  
//   for (let i = 0; i < arr1.length; i += 1) {
//     newArr.push(arr1[i]);
//     newArr.push(arr2[i]);
//   }
  
//   return newArr;
// };

// flatMap implementation

function interleave(arr1, arr2) {
  return arr1.flatMap((el, index) => [el, arr2[index]]);
}