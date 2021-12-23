const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function doubleConsonants(string) {
  let charArr = [];
  
  [...string].forEach(function(char) {
    /[a-z]/i.test(char) && !VOWELS.includes(char) ? charArr.push(char, char) : charArr.push(char);
  });
  
  return charArr.join('');
}