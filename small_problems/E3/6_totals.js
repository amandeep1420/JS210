let runningTotal = (array) => {
  let total = 0;
  return array.map(num => total += num);
}
