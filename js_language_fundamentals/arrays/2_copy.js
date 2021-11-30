let myArray = [1, 2, 3, 4];
const myOtherArray = myArray; // myArray.slice() 

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// solution we missed/didn't implement: manually pushing each element in the array to 
// a new array