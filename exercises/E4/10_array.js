function average(arr) {
  return Math.floor(arr.reduce((n1, n2) => n1 + n2) / arr.length);
}