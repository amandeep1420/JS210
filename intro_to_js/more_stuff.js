// function allMatches(wordsArray, regex) {
//   return wordsArray.filter(word => regex.test(word));
// }

// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// console.log(allMatches(words, /lab/));


// function isNotANumber(value) {
//   return (typeof value === 'number') && (String(value) === 'NaN');
// }

// console.log(isNotANumber(NaN));
// console.log(isNotANumber(55));

function isNegativeZero(num) {
  return1 / num === -Infinity;
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(55));