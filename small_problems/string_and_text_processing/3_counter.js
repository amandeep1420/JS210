const letterCaseCount = function letterCaseCount(str) {
  let startCount   = str.length
  let lowerCount   = startCount - str.replace(/[a-z]/g, '').length;
  let upperCount   = startCount - str.replace(/[A-Z]/g, '').length;
  let neitherCount = startCount - str.replace(/[^A-Z]/gi, '').length;
  
  return {lowercase: lowerCount, uppercase: upperCount, neither: neitherCount};
};

// review their solution; it's what you were trying to reason out prior to this
