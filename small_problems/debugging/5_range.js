function range(start, end) {
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function rangeNoStart(end) { // the issue was the first function being overriden - resulted in range calling itself forever
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(rangeNoStart(5));