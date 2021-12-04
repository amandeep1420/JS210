function sequence(count, start) {
  return [...Array(count).keys()].map((num, index) => start * (index + 1));
}