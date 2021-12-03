const myArray = [5, 5]; // length is 2
myArray[-1] = 5; // length is still 2
myArray[-2] = 5; // length is still 2

function average(array) { // making notes for invocation on line 15
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i]; 
  }

  return sum / Object.keys(array).length; // 20 / 2 === 10 ----> refactored to return
}                                         // expected total

average(myArray);