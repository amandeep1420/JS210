let isPalindrome = function(string) {
  
};

function isRealPalindrome(str) {
  str = [...str.toLowerCase()].filter(char => /[a-z]/i.test(char)).join('');
  return str === (str.split('').reverse().join(''));
}