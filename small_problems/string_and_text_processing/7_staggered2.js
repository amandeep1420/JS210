function staggeredCase(string) {
  let upper = false;
  
  return [...string].map(char => {
    if (/[^A-Z]/i.test(char)) {
      return char;
    } else {
      upper = !upper;
      return upper ? char.toUpperCase() : char.toLowerCase();
    }
  }).join('');
}