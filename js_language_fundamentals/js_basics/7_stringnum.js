const key = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
};

function stringToSignedInteger(numString) {
  let numStringArray = numString.split('');
  let newNum         = 0;
  
  var sign = Object.keys(key).includes(numStringArray[0]) ? false : numStringArray.shift();
  
  numStringArray.forEach(numString => {
    newNum = newNum * 10 + key[numString];
  }
  );
  
  return sign ? applySign(sign, newNum) : newNum;
}

function applySign(sign, number) {
  return sign === '-' ? (number * -1) : number;
}

console.log(stringToSignedInteger('+100'));