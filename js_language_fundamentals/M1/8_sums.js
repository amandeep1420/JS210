// issue I caught: productOfSums returns undefined

// issue I missed: sum is not initialized to anything within total - each for loop iteration
// results in sum = NaN

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}