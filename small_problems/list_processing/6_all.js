function leadingSubstrings(string) {
  return string.split('').map((_, index) => string.slice(0, index + 1));
} 

function substrings(string) {
  let substrings = [];
  
  for (let idx = 0; idx < string.length; idx += 1) {
    substrings.push(leadingSubstrings(string.slice(idx)));
  }
  
  return substrings.flat();
}