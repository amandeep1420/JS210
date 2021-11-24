let gcd = (num1, num2) => {
  let sortedNums = [num1, num2].sort();
  
  for (let divisor = sortedNums[0]; divisor > 0; divisor -= 1) {
    if (sortedNums[1] % divisor === 0) return divisor;
  }
};

gcd(12, 4);