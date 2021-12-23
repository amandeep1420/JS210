// determine century, then process to return string

let century = function(year) {
  let centuryString = String(Math.ceil(year / 100));
  
  let lastChar     = centuryString[centuryString.length - 1];
  let noTeensPlace = centuryString[centuryString.length - 2] !== '1';
  
  if (lastChar === '1' && noTeensPlace) {
    return centuryString + 'st';
  } else if (lastChar === '2' && noTeensPlace) {
    return centuryString + 'nd';
  } else if (lastChar === '3' && noTeensPlace) {
    return centuryString + 'rd';
  } else {
    return centuryString + 'th';
  }
};
