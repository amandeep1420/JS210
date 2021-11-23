function makeCounter() {
  let counter = 0;
  
  return function() {
    counter += 1;
    return counter;
  }
}

// let incrementCounter = makeCounter();

// console.log(incrementCounter());
// console.log(incrementCounter());
// console.log(incrementCounter());
// console.log(incrementCounter());

// let secondIncrement = makeCounter();

// console.log(secondIncrement());



function doubleIncrement() {
  let counter = 0;
  
  const fun1 = function() {
    counter += 1;
    return counter;
  };
  
  const fun2 = function() {
    counter += 5;
    return counter;
  };
  
  return [fun1, fun2];
}

let funs = doubleIncrement();

let fun1 = funs[0];
let fun2 = funs[1];

console.log(fun1());
console.log(fun1());
console.log(fun1());
console.log(fun1());
console.log(fun1());
console.log(fun1());
console.log(fun2());