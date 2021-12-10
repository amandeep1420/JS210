const areArraysEqual = function areArraysEqual(arr1, arr2) {
  let arr2Copy = [...arr2];
  
  for (let i = 0; i < arr1.length; i += 1) {
    let currentElement = arr1[i];
    if (!arr2Copy.includes(currentElement)) return false;
    let elementToRemove = arr2Copy.indexOf(currentElement);
    arr2Copy.splice(elementToRemove, 1);
  }
  
  return true;
};