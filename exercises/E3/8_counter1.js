function wordSizes(string) {
  let counts = {};
  let strings = string.split(' ');
  
  strings.forEach(el => counts[el.length] ? counts[el.length] += 1 : counts[el.length] = 1);
  
  delete counts[0];
  
  return counts;
}