function sum(num) {
  return String(num).split('').reduce((total, num) => total + Number(num), 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

// they used 0 as the accumulator and only called Number() on each digit;
// the way I originally did it was super lazy, goodness