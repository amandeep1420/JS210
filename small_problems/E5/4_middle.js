function centerOf(string) {
  let oddLength = string.length % 2 !== 0;
  let half = Math.floor((string.length - 1) / 2);
  return oddLength ? string[half] : string.slice(half, half + 2);
}