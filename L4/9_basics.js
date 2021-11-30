function firstElementOf(arr) {
  return arr[0]; // they didn't make a guard clause for empty arrays
}

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

function nthElementOf(arr, index) {
  return arr[index];
}

// notes:
// you can insert data into an array at a negative index; 
// the element becomes part of the array object itself
// and may be referenced using bracket notation and the 'index' that was used
// as either a number or a string
// ex. arr[-1] = 'cat'   ===> arr[-1] returns 'cat', arr['-1'] returns 'cat'


function firstNof(arr, count) {
  let newArr = [];
  
  for (let index = 0; index < arr.length; index += 1) {
    newArr.push(arr[index]);
    if (newArr.length === count) break;
  }
  
  return newArr;
}

// no


// function lastNOf(arr, count) {
//   return arr.slice(0, count);
// }

function lastNOf(arr, count) {
  let index = arr.length - count;
  
  if (count < 0) index = 0;
  
  return arr.slice(index)
}

function endsOf(arr1, arr2) {
  return [arr1[0], arr2[arr2.length - 1]];
}