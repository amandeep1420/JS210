function isUppercase(string) {
  return string === string.toUpperCase();
}

// recreate the regex solution

function isUppercase2(string) {
  return !(/[a-z]/).test(string);
}