function oddElementsOf(arr) {
  let newArr = [];
  
  for (let index = 0; index < arr.length; index +=1) {// can also start index at 1 and increment by 2
    if (index % 2 !== 0) newArr.push(arr[index]);
  }
  
  return newArr;
}

function forwardAndBack(arr) {
  let newArr = [];
  
  for (let index = 0; index < arr.length; index += 1) {
    newArr.push(arr[index]);
  }
  
  for (let index = arr.length -1; index >= 0; index -= 1) {
    newArr.push(arr[index]);
  }
  
  return newArr;
}


let mirroredArray = function(arr) {
  return arr.concat(arr.slice().reverse());
}

let result = mirroredArray([1, 2, 3])

console.log(result);


// let sortDescending = (arr) => {
//   return arr.slice().sort().reverse();
// }

let sortDescending = (arr) => {
  let arrCopy = arr.slice();
  return arrCopy.sort((a, b) => b - a); // you can sort numbers in reverse order like so
};

let result2 = sortDescending([1, 2, 3, 4, 5]);

console.log(result2); 

function matrixSums(arr) {
  let newArr = [];
  
  for (let index = 0; index < arr.length; index += 1) {
    newArr.push(arr[index].reduce((n1, n2) => n1 + n2));
  }
  
  return newArr;
}

function uniqueElements(arr) {
  let newArr = []
  
  for (let index = 0; index < arr.length; index += 1) {
    if (newArr.indexOf(arr[index]) === -1) newArr.push(arr[index]);
  }
  
  return newArr;
}