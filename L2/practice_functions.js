// function average(a, b, c) {
//   return sum(a, b, c) / 3;
// }


// console.log(average(1, 2, 3));



//////////

function average(array) {
  function sum(array) {
    let total = 0;
    
    for (let index = 0; index < array.length; index += 1) {
      total += array[index];
    }
    
    return total;
  }
  
  return sum(array) / array.length;
}

console.log(average([1, 2, 3, 4, 5]));

let temperatures = [24.5, 22.4, 73.2, 47.5, 75.3];

console.log(average(temperatures));

function um() {
  let meower = 'dog';
  meow = 'cat';
}

function outer() {
  function inner() {
    return 'hello'
  }
  return inner();
}

console.log(inner());