let twice = (number) => {
  let numberAsString = String(number);
  
  if (numberAsString.length % 2 !== 0) return number * 2; // early termination to save processing

  let length    = numberAsString.length;  
  let leftSide  = numberAsString.slice(0, length / 2);
  let rightSide = numberAsString.slice(Math.ceil(length / 2), length);
  
  return leftSide === rightSide ? number : number * 2;
};


// note that they have two functions in the solution:
// a helper function that extracts the logic of determining whether the argument is a dub num
// and another function that contains a conditional expression that determines what to return
// note the differences between slice and substring

// their solution:

// function twice(number) {
//   if (isDoubleNumber(number)) {
//     return number;
//   } else {
//     return number * 2;
//   }
// }

// function isDoubleNumber(number) {
//   const stringNumber = String(number);
//   const center = stringNumber.length / 2;
//   const leftNumber = stringNumber.substring(0, center);
//   const rightNumber = stringNumber.substring(center);

//   return leftNumber === rightNumber;
// }
