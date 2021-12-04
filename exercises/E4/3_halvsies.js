let halvsies = function(array) {
  let halfway = Math.ceil(array.length / 2);
  return [array.slice(0, halfway), array.slice(halfway)];
};