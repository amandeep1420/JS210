const isLeapYear = function(year) {
  if (year % 4 === 0) {
    return (year % 100 !== 0 || year % 400 === 0 || year < 1752);
  } else return false;
};