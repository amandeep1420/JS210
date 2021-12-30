/*
P
  - write a function that rotates the last 'n' digits of a number. for the rotation,
    rotate by one digit to the left, moving the first digit to the end.





*/


function rotateRightmostDigits(number, n) {
  let numbers        = [...String(number)];
  let rotatedIndex   = numbers.length - n;
  let nonRotatedNums = numbers.filter((_, idx) => idx !== rotatedIndex);
  let rotatedNum     = numbers[rotatedIndex];
  let fixedArr       = nonRotatedNums.concat(rotatedNum);
  return Number(fixedArr.join(''));
}

