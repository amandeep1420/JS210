function multisum(number) {
  let sum = 0;
  
  for (let currentNum = 1; currentNum <= number; currentNum +=1) {
    if (currentNum % 3 === 0 || currentNum % 5 === 0) sum += currentNum;
  }
  
  return sum;
}