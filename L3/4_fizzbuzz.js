/*
P
  - write a function that iterates over the integers from 1 to 100, inclusive.
    for multiples of three, log "Fizz" to the console; for multiples of five, 
    log "Buzz". for numbers which are multiples of both three and five, log
    "FizzBuzz". for all other numbers, log the number
  - input: n/a
  - output: specified above
E
  - n/a
D
  - n/a
A
  - loop through the range and log the above
    - not much to say here; use a conditional
C




*/





let fizzbuz = () => {
  for (let number = 1; number <= 100; number += 1) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
      console.log('FizzBuzz');
    } else if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(number);
    }
  }
};

fizzbuz();

// really awesome solution below

let fizzbuzz = () => {
  for (let index = 1; index <= 100; index += 1) {
    let message = '';

    if (index % 3 === 0) {
      message += 'Fizz';
    }

    if (index % 5 === 0) {
      message += 'Buzz';
    }

    console.log(message || index);
  }
};