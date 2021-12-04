let repeater = string => {
  let charArray = [];
  
  for (let i = 0; i < string.length; i += 1) {
    charArray.push(string[i], string[i])
  }
  
  return charArray;
}

// the dumb one line solution that isn't readable

function repeater2(string) {
  return string.split('').map(char => char + char).join('');
}

// an amazing regex one

function repeater3(string) {
  return string.replace(/(.)/g, "$1$1");
}