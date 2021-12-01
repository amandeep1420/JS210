// let radiansToDegrees = radians => (radians * 180) / Math.PI;

// let num = -180

// let logPositiveValue = num => console.log(Math.abs(num));

// let result = Math.sqrt(16777216);

// let result2 = Math.pow(16, 6);

// console.log(result2);

// let a = 50.72;
// let b = 49.2;
// let c = 49.86;

// Math.floor(a)
// Math.ceil(b)
// Math.round(c)

function returnRandomInteger(min, max) {
  if (min === max) return min;
  
  if (min > max) [min, max] = [max, min];
  
  let powerFor10 = 1;
  let minCopy = min;
  
  while (minCopy >= 1) {
    minCopy /= 10;
    powerFor10 += 1;
  }
  
  while (true) {
    let currentNum = Math.random() * Math.pow(10, powerFor10);
    
    // if (currentNum >= min && currentNum <= max) return Math.floor(currentNum);
    if (currentNum === max) return Math.floor(currentNum);
  }
}

let result = returnRandomInteger(120, 100);

console.log(result);