function reverseWords(string) {
  let words = string.split(' ');
  let fixedWords = words.map(word => word.length >= 5 ? word.split('').reverse().join('') : word );
  return fixedWords.join(' ');
}