let getGrade = function(n1, n2, n3) {
  let average = (n1 + n2 + n3) / 3;
  
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};