function merge(arr1, arr2) {
  let arr1Index = 0;
  let arr2Index = 0;
  let mergedArr = [];
  
  while (arr1[arr1Index] || arr2[arr2Index]) {
    let arr1El = arr1[arr1Index];
    let arr2El = arr2[arr2Index];
    
    if (arr1El === undefined || arr2El < arr1El) {
      mergedArr.push(arr2El);
      arr2Index += 1;
    }
    
    if (arr2El === undefined || arr1El < arr2El) {
      mergedArr.push(arr1El);
      arr1Index += 1;
    }
  }
  
  return mergedArr;
}

let result = merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]

console.log(result);

result = merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]

console.log(result);

result = merge([], [1, 4, 5]);             // [1, 4, 5]

console.log(result);

result = merge([1, 4, 5], []);             // [1, 4, 5]

console.log(result);
