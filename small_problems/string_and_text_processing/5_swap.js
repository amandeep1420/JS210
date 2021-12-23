function swapCase(str) {
  return str.split('')
            .map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
            .join('');
}