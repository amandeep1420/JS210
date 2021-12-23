function negative(num) {
  return -(Math.abs(num));
}

let negative2 = num => -(Math.abs(num));

let negative3 = function(num) {
  return num >= 0 ? -num : num;
}