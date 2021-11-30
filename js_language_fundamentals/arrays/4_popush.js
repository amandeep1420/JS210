function pop(array) {
  if (array.length === 0) return undefined;
  
  let popped = array[array.length - 1];
  
  array.length = array.length - 1;
  
  return popped;
}

function push(array, ...args) {
  for (let index = 0; index < args.length; index += 1) {
    array[array.length] = args[index];
  }
  
  return array.length;
}