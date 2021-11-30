function concat(...args) {
  let newArr = [];
  
  for (let index = 0; index < args.length; index +=1) {
    let currentElement = args[index];
    
    if (Array.isArray(currentElement)) {
      for (let i = 0; i < currentElement.length; i += 1) {
        newArr.push(currentElement[i]);
      }
    } else {
      newArr.push(currentElement);
    }
  }
  
  return newArr;
}
