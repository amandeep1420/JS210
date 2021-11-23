const key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function integerToString(number) {
  let reversedDigits = [];
  
  do {
    reversedDigits.push(number % 10); // storing the remainder
    number = Math.floor(number / 10); // chopping off the last digit
  } while (number !== 0); // runs at least once, even if argument is 0
  
  return reversedDigits.reverse().join(''); 
} // the last line both fixes the order
  // and returns a string, as join() returns a string,
  // so there's no need for a key!

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(typeof integerToString(5000));      // "5000"

function signedIntegerToString(number) {
  if (number > 0) {
    return '+' + integerToString(number);
  } else if (number < 0) {
    return '-' + integerToString(number);
  } else {
    return '0';
  }
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"