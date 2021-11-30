function push(array, value) {
  array[array.length] = value;
  return array.length;
}

// mutates

function pop(array) {
  if (array.length === 0) { // I added this from the book; I did not account for empty arrays
    return undefined;
  }
  
  let oneLessThanLength = array.length - 1;
  let lastElement       = array[oneLessThanLength];
  array.length          = oneLessThanLength;
  return lastElement;
}

// mutates

function unshift(array, value) {
  let oldValue = array[0];
  let newLength = array.length + 1;
  array[0] = value;
  
  for (let index = 1; index < newLength; index += 1) {
    let nextValue = array[index];
    array[index] = oldValue;
    oldValue = nextValue;
  }
  
  return array.length;
}

// theirs is better

// let unshift = function(array, value) {
//   for (let index = array.length; index > 0; index -= 1) {
//     array[index] = array[index - 1];
//   }

//   array[0] = value;
//   return array.length;
// };

// mutates

function shift(array) {
  let firstElement = array[0];
  
  if (array.length === 0) { // I did not account for an empty array
    return undefined;
  }
  
  for (let index = 0; index < array.length - 1; index += 1) {
    array[index] = array[index + 1];
  }
  
  array.length = array.length - 1;
  return firstElement;
}

// mutates

let indexOf = function(array, value) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) return index;
  }
  
  return -1;
}

let lastIndexOf = (array, value) => {
  for (let index = array.length - 1; index >= 0; index -= 1) {
    if (array[index] === value) return index;
  }
  
  return -1;
}

function slice(array, startIndex, endIndex) {
  let newArr = [];
  
  for (let index = 0; index < array.length || index < endIndex; index += 1) {
    if (index >= startIndex) newArr.push(array[index]);
  }
  
  return newArr;
}



// didn't do a splice recreation


let concat = (arr1, arr2) => {
  let newArray = [];
  
  for (let index = 0; index < arr1.length; index +=1) {
    newArray.push(arr1[index]);
  }
  
  for (let index = 0; index < arr2.length; index +=1) {
    newArray.push(arr2[index]);
  }
  
  return newArray;
}

function join(arr, separator) {
  let newString = '';
  
  for (let index = 0; index < arr.length - 1; index += 1) {
    newString += String(arr[index]);
    newString += separator;
  }
  
  newString += arr[arr.length - 1];
  return newString;
}

let arraysEqual = (arr1, arr2) => {
  for (let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] !== arr2[index]) return false;
  }
  
  return true; // they also compared length via guard clause; I thought about it, but lazed out
}