let isPalindrome = function(string) {
  return string === (string.split('').reverse().join(''));
};