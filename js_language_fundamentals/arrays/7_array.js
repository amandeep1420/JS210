function shift(arr) {
  if (arr.length === 0) return undefined;
  let shifted = arr[0];
  
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1];
  }
  
  arr.length = arr.length - 1;
  return shifted;
}

function unshift(arr, ...args) {
  let newArr = args.concat(arr);
  
  for (let i = 0; i < newArr.length; i += 1) {
    arr[i] = newArr[i];
  }
  
  return arr.length;
}


// why did I think splice didn't mutate? that's slice, not splice
// lol