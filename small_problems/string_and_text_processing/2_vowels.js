function removeVowels(strings) {
  return strings.map(str => str.replace(/[aeiou]/ig, ''));
}