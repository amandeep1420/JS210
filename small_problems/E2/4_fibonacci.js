let findFibonacciIndexByLength = function(digitCount) {
  let first  = 1n;
  let second = 1n;
  let currentNum;
  
  for (let index = 3n; ; index += 1n) {
    currentNum = first + second;
    if (BigInt(String(currentNum).length) === digitCount) return index;
    
    [first, second]  = [second, currentNum];
  }
};