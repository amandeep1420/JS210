function fridayThe13ths(year) {
  let dateObj   = new Date(`January 13, ${year}`);
  let counter   = 0;
  let fridayVal = 5;
  
  for (let month = 0; month < 12; month += 1) {
    dateObj.setMonth(month);
    
    if (dateObj.getDay() === fridayVal) counter += 1;
  }
  
  return counter;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2