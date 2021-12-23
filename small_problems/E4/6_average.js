function showMultiplicativeAverage(arr) {
  let total = arr.reduce((e1, e2) => e1 * e2) / arr.length;
  return total.toFixed(3);
}

// big takeaway: use Number.prototype.toFixed() to format a number using fixed point notation
// returns a string