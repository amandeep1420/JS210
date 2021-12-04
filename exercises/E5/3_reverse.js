function reverseNumber(num) {
  let arrOfStringDigits = String(num).split('').reverse();
  return parseInt(arrOfStringDigits.join(''), 10);
}


// the cheating way, lol

function reverseNumber2(num) {
  return +([...String(num)].reverse().join(''))
}

// you can prepend a string with + to coerce it into a number